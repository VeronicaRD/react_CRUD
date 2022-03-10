import Contact from "./Contact";

const Contacts = ({ contacts, onDelete, onEdit }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <Contact 
        key={index} 
        contact={contact} 
        onDelete={onDelete} 
        onEdit={onEdit} />
      ))}
    </>
  );
};

export default Contacts;
