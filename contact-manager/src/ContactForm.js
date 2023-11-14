
import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new contact object
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    // Pass the new contact data to the onSubmit function
    onSubmit(newContact);

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
