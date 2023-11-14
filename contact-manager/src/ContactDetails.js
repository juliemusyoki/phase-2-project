import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetails = ({ contacts }) => {
  const { contactId } = useParams();
  const contact = contacts.find((c) => c.id === parseInt(contactId));

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <div>
        <img src={contact.image} alt={contact.name} />
        <h3>{contact.name}</h3>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Gender: {contact.gender}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
