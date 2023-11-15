import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import axios from 'axios'; // Import axios for making HTTP requests
import './App.css';

const App = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    // Fetch contacts from json-server API on component mount
    axios.get('https://contact-manager-771l.onrender.com/contacts') // Update the URL accordingly
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  const handleAddContact = (newContact) => {
    // Update json-server API and then update the local state
    axios.post('https://contact-manager-771l.onrender.com/contacts', newContact)
      .then((response) => {
        setContactData((prevContacts) => [...prevContacts, response.data]);
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };

  const handleDeleteContact = (contactId) => {
    // Update json-server API and then update the local state
    axios.delete(`https://contact-manager-771l.onrender.com/contacts/${contactId}`)
      .then(() => {
        setContactData((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        );
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  const handleEditContact = (contactId, updatedData) => {
    // Update json-server API and then update the local state
    axios.put(`https://contact-manager-771l.onrender.com/contacts/${contactId}`, updatedData)
      .then(() => {
        setContactData((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === contactId ? { ...contact, ...updatedData } : contact
          )
        );
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contactData}
                onDelete={handleDeleteContact}
                onEdit={handleEditContact}
              />
            }
          />
          <Route
            path="/add-contact"
            element={<ContactForm onSubmit={handleAddContact} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
