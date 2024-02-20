import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({ regNumber: '', model: '' });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    // Här skulle du hämta fordonen från din backend
    // const response = await fetch('din_backend_endpoint/fordon');
    // const data = await response.json();
    // setVehicles(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prevVehicle) => ({ ...prevVehicle, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Här skulle du skicka newVehicle till din backend för att spara det nya fordonet
    // const response = await fetch('din_backend_endpoint/fordon', { method: 'POST', body: JSON.stringify(newVehicle), headers: { 'Content-Type': 'application/json' } });
    // Om lyckad, uppdatera fordonlistan
    // fetchVehicles();
    setNewVehicle({ regNumber: '', model: '' }); // Återställ formuläret
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Mina Fordon</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
        <TextField
          label="Registreringsnummer"
          name="regNumber"
          value={newVehicle.regNumber}
          onChange={handleInputChange}
          style={{ marginRight: 8 }}
        />
        <TextField
          label="Bilmodell"
          name="model"
          value={newVehicle.model}
          onChange={handleInputChange}
          style={{ marginRight: 8 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Lägg till
        </Button>
      </form>

      <Table style={{ marginTop: 16 }}>
        <TableHead>
          <TableRow>
            <TableCell>Registreringsnummer</TableCell>
            <TableCell>Bilmodell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.regNumber}>
              <TableCell>{vehicle.regNumber}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Vehicles;
