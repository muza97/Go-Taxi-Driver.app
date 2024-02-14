import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Snackbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    licenseNumber: '',
    vehicle: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount(prevAccount => ({
      ...prevAccount,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-focnoae3da-uc.a.run.app/api/register/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Driver registered successfully:', data);
        navigate("/login");
      } else {
        setSnackbarMessage('Registrering misslyckades. Försök igen.');
        setOpenSnackbar(true);
        console.error('Failed to register driver:', await response.json());
      }
    } catch (error) {
      setSnackbarMessage('Ett fel inträffade. Försök igen.');
      setOpenSnackbar(true);
      console.error('There was an error registering the driver', error);
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Registrera</Typography>
      <form onSubmit={handleSubmit}>
        {/* Input-fält för alla kontoattribut */}
        <TextField name="name" label="Name" fullWidth margin="normal" value={account.name} onChange={handleChange} />
        <TextField name="email" label="E-post" fullWidth margin="normal" value={account.email} onChange={handleChange} />
        <TextField name="password" label="Lösenord" type="password" fullWidth margin="normal" value={account.password} onChange={handleChange} />
        <TextField name="phoneNumber" label="Phonenumber" fullWidth margin="normal" value={account.phonenumber} onChange={handleChange} />
        <TextField name="licenseNumber" label="Licensenumber" fullWidth margin="normal" value={account.licensenumber} onChange={handleChange} />
        <TextField name="vehicle" label="Vehicle" fullWidth margin="normal" value={account.vehicle} onChange={handleChange} />
        <Button type="submit" color="primary" variant="contained" fullWidth>Registrera</Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Paper>
  );
};

export default Register;
