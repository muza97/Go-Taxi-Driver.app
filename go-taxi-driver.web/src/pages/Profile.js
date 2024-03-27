import React, { useState, useEffect } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import '../dist/styles.css'; 
import { themeColors } from '../theme/themeColors';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';


const Profile = () => {
  const { user, setUser } = useAuth();
  console.log('Current user in Profile component:', user); // Logga aktuell användare

  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone_number: user.phone_number || '',
    license_number: user.license_number || '',
  });

  useEffect(() => {
    console.log('User data updated in Profile component:', user); // Logga när användardata uppdateras
    setProfileData({
      name: user.name || '',
      email: user.email || '',
      phone_number: user.phone_number || '',
      license_number: user.license_number || '',
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault(); // Lägg till detta för att förhindra att sidan laddas om
    const token = localStorage.getItem('driverToken');
  
    const profileDataToSend = {
      name: profileData.name,
      email: profileData.email,
      phone_number: profileData.phone_number,
      license_number: profileData.license_number
    };
  
    console.log("Sending profile update with data:", profileDataToSend); // Logga data som skickas
  
    const requestOptions = {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileDataToSend)
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/profile', requestOptions);
  
      console.log("Response status:", response.status); // Logga svarstatus
  
      if (!response.ok) {
          throw new Error('Failed to update profile');
      }
  
      const updatedUser = await response.json();
      console.log("Profile updated successfully:", updatedUser); // Logga det uppdaterade svaret
  
      setUser(updatedUser); // Sätt det uppdaterade användarobjektet i kontexten
      setEditMode(false); // Stäng av redigeringsläget
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Profile update error:", error);
      alert(`Failed to update profile: ${error.message}`);
    }
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
              value={profileData.name}
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
              value={profileData.email}
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">Phonenumber</label>
        <input
              type="phone_number"
              name="phone_number"
              onChange={handleInputChange}
              value={profileData.phone_number}
              placeholder="Phonenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            </div>
            <div>
            <label htmlFor="licenseNumber" className="block text-sm font-semibold text-gray-700">Licensenumber</label>
        <input
              type="license_number"
              name="license_number"
              onChange={handleInputChange}
              value={profileData.license_number}
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
