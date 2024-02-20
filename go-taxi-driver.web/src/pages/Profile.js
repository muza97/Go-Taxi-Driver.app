import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Användarens Namn',
    email: 'anvandare@example.com',
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
    <Paper style={{ padding: 16, margin: '16px 0' }}>
      <Typography variant="h5">Min Profil</Typography>
      <form noValidate autoComplete="off" style={{ marginTop: 16 }}>
        <TextField
          label="Namn"
          name="name"
          value={user.name}
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <TextField
          label="E-post"
          name="email"
          value={user.email}
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <TextField
          label="Telefonnummer"
          name="phoneNumber"
          value={user.phoneNumber}
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <TextField
          label="Licensnummer"
          name="licenseNumber"
          value={user.licenseNumber}
          fullWidth
          margin="normal"
          onChange={handleInputChange}
          disabled={!editMode}
        />
        {editMode ? (
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
            onClick={handleSaveProfile}
          >
            Spara
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: 16 }}
            onClick={toggleEditMode}
          >
            Redigera
          </Button>
        )}
      </form>
    </Paper>
  );
};

export default Profile;
