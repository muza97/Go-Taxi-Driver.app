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
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">My Vehicles</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
       
        <input 
              type="Registreringsnummer"
              name="regNumber"
              onChange={handleInputChange}
              value={newVehicle.regNumber}
              placeholder="Licensenumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input 
              type="Bilmodell"
              name="model"
              onChange={handleInputChange}
              value={newVehicle.model}
              placeholder="Car model"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
        
        
        <button
          type="submit"
          className="w-min flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
          style={{ backgroundColor: '#01860f' }}
          onClick={handleInputChange}
        >
          Upload
        </button>
      </form>

      <Table style={{ marginTop: 16 }}>
        <TableHead>
          <TableRow>
            <TableCell>Licensenumber</TableCell>
            <TableCell>Car model</TableCell>
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
