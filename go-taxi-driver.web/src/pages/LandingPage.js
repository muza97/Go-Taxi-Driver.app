import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/LandingPage.css";

const Landing = () => {
  const [earnings, setEarnings] = useState({});
  const [workHours, setWorkHours] = useState({});
  const token = localStorage.getItem('driverToken');

  useEffect(() => {
    // Define asynchronous function to fetch earnings overview
    const fetchEarningsOverview = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` } // Fix: Use backticks for template literal
        };
        const response = await axios.get('https://api-g36q5boh2q-uc.a.run.app/api/earningsOverview', config);
        setEarnings(response.data);
      } catch (error) {
        console.error('Error fetching earnings overview: ', error);
      }
    };

    // Define asynchronous function to fetch work hours
    const fetchWorkHours = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` } // Fix: Use backticks for template literal
        };
        const response = await axios.get('https://api-g36q5boh2q-uc.a.run.app/api/workHours', config);
        setWorkHours(response.data);
      } catch (error) {
        console.error('Error fetching work hours: ', error);
      }
    };

    fetchEarningsOverview();
    fetchWorkHours();
  }, [token]);

  return (
    <div className="container">
      <div className="dashboard-heading">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dashboard</h2>
        <p className="mb-10 text-gray-600">Welcome to your dashboard</p>
      </div>

      <div className="secondContainer">
        <div className='earnings'>
          <h2>Earnings Overview</h2>
          <div className='chart'>
            {Object.entries(earnings).map(([month, amount]) => (
              <div key={month} className='earnings-bar'>
                <span>{month}</span>
                <span>${amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='workHours'>
          <h2>Work Hours Overview</h2>
          <div className='chart'>
            {Object.entries(workHours).map(([month, hours]) => (
              <div key={month} className='hours-bar'>
                <span>{month}</span>
                <span>{hours} hours</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
