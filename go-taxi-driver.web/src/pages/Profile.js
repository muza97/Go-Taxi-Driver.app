import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import '../dist/styles.css'; 
import { themeColors } from '../theme/themeColors';
import { useNavigate, Link } from 'react-router-dom';


const Profile = () => {
  const [user, setUser] = useState({
    name: 'User Name',
    email: 'User@example.com',
    phoneNumber: '0701234567',
    licenseNumber: 'ABC123'
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveProfile = () => {
    // Logik för att spara användaruppgifter, t.ex. skicka till backend
    alert('Profil uppdaterad!');
    setEditMode(false); // Stäng av redigeringsläge
  };

  return (
    <Paper elevation={0} style={{ padding: 16, margin: '16px 0' }}>
      <div className="bg-white p-30 min-w-md w-full mx-auto">

     
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">My Profile</h2>
      
      <div className="text-left">
      <p className="mb-10 text-gray-600">Manage your personal information</p>  
          </div>
      <form className="space-y-10" onSubmit={handleSaveProfile}>
      <div>
      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
      <input 
              type="name"
              name="name"
              onChange={handleInputChange}
              value={user.name}
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
        <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={user.email}
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">Phonenumber</label>
        <input
              type="phoneNumber"
              name="phoneNumber"
              onChange={handleInputChange}
              value={user.phoneNumber}
              placeholder="Phonenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="licenseNumber" className="block text-sm font-semibold text-gray-700">Licensenumber</label>
        <input
              type="licenseNumber"
              name="licenseNumber"
              onChange={handleInputChange}
              value={user.licenseNumber}
              placeholder="Licensenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
        {editMode ? (
  <button
    type="button"
    className="w-min flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
    style={{ backgroundColor: '#008000', color: themeColors.text }}
    onClick={handleSaveProfile}
  >
    Save
  </button>
) : (
  <button
    type="button"
    className="w-min flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
    style={{ backgroundColor: '#bab7b7', color: themeColors.text }}
    onClick={toggleEditMode}
  >
    Edit
  </button>
)}

      </form>
      </div>
    </Paper>

  );
};

export default Profile;
