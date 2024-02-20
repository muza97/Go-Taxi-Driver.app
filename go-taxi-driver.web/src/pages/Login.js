import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom'; // Importera useNavigate

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Skapa en instans av useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-focnoae3da-uc.a.run.app/api/login/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Inloggning lyckades:', data);
        
        // Spara token i localStorage eller en annan säker lagringsmekanism
        localStorage.setItem('driverToken', data.token); // Antag att token finns i data.token
        
        // Navigera till dashboard
        navigate('/landing'); 
      } else {
        // Felhantering, visa ett felmeddelande
        alert('Inloggning misslyckades. Försök igen.');
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
      alert('Ett fel inträffade. Försök igen.');
    }
};


  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Logga in</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="E-post"
          fullWidth
          margin="normal"
          value={credentials.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Lösenord"
          type="password"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Logga in
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
