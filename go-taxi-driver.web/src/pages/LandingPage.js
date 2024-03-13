import React from 'react';
import "./LandingPage.css"

const Landing = () => {
   const token = localStorage.getItem('driverToken');
   return (

    <div className='Container'>

    <div className="firstContainer">
        <div className='StaticText'> <h1>DASHBOARD</h1>
        <p>Welcome to your dashboard</p></div>
    </div>

    <div className="secondContainer">
        <div className='Earnings'>
            <p>Earning overview</p>

        </div>


        <div className='WorkHours'>
            <p>Working overview</p>

        </div>
    </div>

</div>




   );
};

export default Landing;
