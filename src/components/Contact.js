import { FaTimes } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

// FaTimes på rad 9 är kryssikonen

const Contact = ({ contact, onDelete, onEdit, showEdit }) => {
  return (
    <div className="contact">
      <h3>
        {contact.name}

        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(contact._id)}
        />
      </h3>
      <p>
        {contact.company}
      
      </p>
      <h4>{contact.phone}
      <FaPen
          style={{
          cursor: "pointer",
          }}
          onClick={() => onEdit(contact._id)}    //Lägg till redigera funktion
        /></h4>
    </div>
  );
};

export default Contact;
