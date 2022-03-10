import { useState, useEffect } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
//import EditContact from "./components/EditContact";


const App = (contact) => {
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
    
    
    const newContact = { _id, ...contact };
    setContacts([...contacts, newContact]);
  
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddContact(!showAddContact)}
        showAdd={showAddContact}
        
      />
      {showAddContact && <AddContact onAdd={addContact} />}
     
      {contacts.length > 0 ? (
        <Contacts
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={() => setShowEditContact(!showEditContact)}
          showEdit={showEditContact}
          
          
        />
      ) : (
        "No Contacts to show"
      )}
      {showEditContact && <EditContact onEdit={editContact} />} 

      
    </div>
  );
};

export default App;
