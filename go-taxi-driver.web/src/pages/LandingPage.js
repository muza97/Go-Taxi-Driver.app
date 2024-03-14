import React from 'react';
import "../style/LandingPage.css"

const Landing = () => {
   const token = localStorage.getItem('driverToken');
   return (
    <div className="container">
      <div className="dashboard-heading">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dashboard</h2>
        <p className="mb-10 text-gray-600">Welcome to your dashboard</p> 
      </div>

      <div className="firstContainer">
        {/* Your components here */}
      </div>

      <div className="secondContainer">
        <div className='earnings'>
          <h2>Earnings Overview</h2>
          {/* Your earnings component/chart here */}
        </div>

        <div className='workHours'>
          <h2>Work Hours Overview</h2>
          {/* Your work hours component/chart here */}
        </div>
      </div>
    </div>
   );
};

export default Landing;