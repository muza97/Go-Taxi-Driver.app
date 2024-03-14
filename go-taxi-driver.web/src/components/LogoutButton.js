
import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Rensa token från localStorage
        localStorage.removeItem('driverToken');
        
        // Omdirigera användaren till inloggningssidan
        navigate('/');
    };

    return (
        
        <Button 
        onClick={handleLogout} 
        color="primary" 
        variant="contained" 
        fullWidth
        style={{ backgroundColor: '#01860f', color: 'white' }}>
        Log Out
      </Button>
    );
};

export default LogoutButton;
