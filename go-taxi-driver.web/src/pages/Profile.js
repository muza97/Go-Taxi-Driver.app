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
    licenseNumber: 'ABC123',
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

     
      <h1 className="mt-2 text-3xl font-semibold text-gray-900">My Profile</h1>
      
      <div className="text-left">
      <p className="font-medium text-primary-600 hover:text-primary-500">Manage your personal information</p>  
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
            <label htmlFor="phonenumber" className="block text-sm font-semibold text-gray-700">Phonenumber</label>
        <input
              type="phoneNumber"
              name="phonenumber"
              onChange={handleInputChange}
              value={user.phoneNumber}
              placeholder="Phonenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="licensenumber" className="block text-sm font-semibold text-gray-700">Licensenumber</label>
        <input
              type="licenseNumber"
              name="licensenumber"
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
    style={{ backgroundColor: '#bab7b7', color: themeColors.text }}
    onClick={handleSaveProfile}
  >
    Spara
  </button>
) : (
  <button
    type="button"
    className="w-min flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
    style={{ backgroundColor: '#bab7b7', color: themeColors.text }}
    onClick={toggleEditMode}
  >
    Redigera
  </button>
)}

      </form>
      </div>
    </Paper>

  );
};

export default Profile;
