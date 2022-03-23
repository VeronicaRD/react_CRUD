import { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";


const App = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };

    getContacts();
  }, []);

  //Fetch Contacts
  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts");
    const data = await res.json();

    return data;
  };
  

  // Delete Contact
  const deleteContact = async (_id) => {
    setContacts(contacts.filter((contact) => contact._id !== _id));
  };

  // Add contact
  const addContact = (contact) => {
    const _id = Math.floor(Math.random() * 10000) + 1;
    

    const newContact = { _id, ...contact };
    
    setContacts([...contacts, newContact]);
  };


  //Edit Contact
   const editContact = (_id, contact) => {
      console.log(_id);
      console.log(contact);
    
     //skapar en ny lista med kontakter
     const updatedList = [...contacts];
     //sätter index till det idnumret som kontakten vi trycker på
     const index = contacts.findIndex((contact) => contact._id === _id);
     
     // Vi sätter kontakten till det matchande idnumret.
     updatedList[index] = contact;
     
  
      
      setContacts(updatedList); 
      console.log(updatedList);
   
  };
        
   

    


  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddContact(!showAddContact)}
        showAdd={showAddContact}
        
      />
      {showAddContact && <AddContact onAdd={addContact} />}
     
      {contacts.length > 0 ? (
        <Fragment>  {/* gör så du kan lägga två child kompeneter tillsammans, som contact och editcontact */}
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={() => setShowEditContact(!showEditContact)}
          showEdit={showEditContact}
        />
        
        </Fragment>
      ) : (
        "No Contacts to show"
      )}
      {showEditContact && <EditContact onEdit={editContact} />} 

      
    </div>
  );
};

export default App;
