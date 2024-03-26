import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Snackbar, AppBar, Toolbar } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom';
import '../dist/styles.css'; 
import { themeColors } from '../theme/themeColors';

const Register = () => {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
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
      const response = await fetch('https://api-hdzvzie4ya-uc.a.run.app/api/register/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Driver registered successfully:', data);
        navigate("/");
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
    <>
     <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="p-4 w-full flex justify-between items-center bg-white shadow">
        <span className="font-semibold text-xl text-gray-900">City Cab</span>
        <button
          className="font-bold py-2 px-4 rounded"
          style={{ backgroundColor: themeColors.bgColor(1), color: themeColors.text }}
          onClick={() => navigate('/')}
        >
          Log in
        </button>
      </div>

      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Become a City Cab Driver</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input fields */}
            <input
              type="name"
              name="name"
              onChange={handleChange}
              value={account.name}
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={account.email}
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={account.password}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="phone_number"
              name="phone_number"
              onChange={handleChange}
              value={account.phone_number}
              placeholder="Phonenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <Button 
              type="submit" 
              color="primary" 
              variant="contained" 
              fullWidth
              style={{ backgroundColor: themeColors.bgColor(1), color: themeColors.text }}>
              Sign Up
            </Button>
          </form>
          <div className="text-center">
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Already have an account? Sign in
          </Link>
        </div>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={snackbarMessage} />
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
