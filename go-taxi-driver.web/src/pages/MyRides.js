import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import '../style/MyRides.css'

const MyRides = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        // Ersätt 'din_backend_endpoint/hämta_åkturer' med din faktiska endpoint för att hämta åkturer
        const response = await fetch('din_backend_endpoint/hämta_åkturer');
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av åkturer');
        }
        const data = await response.json();
        setRides(data);
      } catch (error) {
        console.error('Fel:', error);
        // Hantera fel, t.ex. visa ett felmeddelande
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="container my-rides">
      <div className="header text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Mina Åkturer</h2>
        <p className="mb-6 text-gray-600">Your personal ride history.</p>
      </div>
      <div className="rides-table">
        <div className="table-row header">
          <div className="table-cell">Datum</div>
          <div className="table-cell">Start</div>
          <div className="table-cell">Slut</div>
          <div className="table-cell">Tid</div>
          <div className="table-cell">Intjänat</div>
        </div>
        {rides.map((ride, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{ride.date}</div>
            <div className="table-cell">{ride.start}</div>
            <div className="table-cell">{ride.end}</div>
            <div className="table-cell">{ride.time}</div>
            <div className="table-cell">{ride.earned}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRides;