import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här skulle du hantera inloggningen, t.ex. genom att anropa en API-tjänst.
    console.log('Inloggningsförsök med:', credentials);
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
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
