// src/components/Register.js
import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

const Register = ({ onRegister }) => {
  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount(prevAccount => ({ ...prevAccount, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(account);
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          fullWidth
          margin="normal"
          value={account.username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          value={account.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={account.password}
          onChange={handleChange}
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
