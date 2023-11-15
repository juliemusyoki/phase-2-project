import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from './Contact';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the json-server API
    axios.get('https://contact-manager-771l.onrender.com/contacts')  
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  const handleDelete = (contactId) => {
    // Delete contact from the json-server API
    axios.delete(`https://contact-manager-771l.onrender.com/contacts/${contactId}`)
      .then(() => {
        // Update local state after successful deletion
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  const handleEdit = (contactId, updatedData) => {
    // Update contact in the json-server API
    axios.put(`https://contact-manager-771l.onrender.com/contacts/${contactId}`, updatedData)
      .then(() => {
        // Update local state after successful update
        setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === contactId ? { ...contact, ...updatedData } : contact
          )
        );
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  return (
    <div>
      <h1>Contact List</h1>
      <div style={contactGridStyle} className="contact-list">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => handleDelete(contact.id)}
            onEdit={(updatedData) => handleEdit(contact.id, updatedData)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
