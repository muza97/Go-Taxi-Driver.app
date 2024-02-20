import React from 'react';
import LogoutButton from '../components/LogoutButton'; 

const Landing = () => {
   const token = localStorage.getItem('driverToken');


    return (
        <div>
            <div>Landing</div>
            <LogoutButton /> {/* Använd LogoutButton-komponenten här */}
        </div>
    );
};

export default Landing;
