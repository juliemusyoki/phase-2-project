
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...contact });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSave = () => {
    onEdit(updatedData);
    handleEditToggle();
  };

  return (
    <div className="contact-container">
      <img src={contact.image} alt={contact.name} />
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedData.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="email"
            name="email"
            value={updatedData.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="tel"
            name="phone"
            value={updatedData.phone}
            onChange={handleInputChange}
          />
          <br />
          <button className="save-button" onClick={handleEditSave}>
            Save
          </button>
          <button className="cancel-button" onClick={handleEditToggle}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <div className="contact-icons">
            <FontAwesomeIcon icon={faEdit} onClick={handleEditToggle} />
            <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
