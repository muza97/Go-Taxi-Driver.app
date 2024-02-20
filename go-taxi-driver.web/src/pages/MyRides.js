import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

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
    <Paper style={{ padding: 16, margin: '16px 0' }}>
      <Typography variant="h5">Mina Åkturer</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Åkturer">
          <TableHead>
            <TableRow>
              <TableCell>Datum</TableCell>
              <TableCell align="right">Start</TableCell>
              <TableCell align="right">Slut</TableCell>
              <TableCell align="right">Tid</TableCell>
              <TableCell align="right">Intjänat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rides.map((ride) => (
              <TableRow key={ride.id}>
                <TableCell component="th" scope="row">
                  {ride.date}
                </TableCell>
                <TableCell align="right">{ride.start}</TableCell>
                <TableCell align="right">{ride.end}</TableCell>
                <TableCell align="right">{ride.time}</TableCell>
                <TableCell align="right">{ride.earned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyRides;
