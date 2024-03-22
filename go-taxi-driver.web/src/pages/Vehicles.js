import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import '../style/Vehicles.css'

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
    alert('Vehicle added successfully!');

  };

  return (
    <div className="container vehicles">
      <div className="header text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">My Vehicles</h2>
        <p className="mb-6 text-gray-600">Manage your vehicle information.</p>
      </div>
      <form className="vehicle-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="regNumber" className="form-label">License Number</label>
          <input 
            type="text"
            id="regNumber"
            name="regNumber"
            onChange={handleInputChange}
            value={newVehicle.regNumber}
            className="form-input"
            placeholder="LicenseNumber"
            required

          />
        </div>
        <div className="input-group">
          <label htmlFor="model" className="form-label">Car Model</label>
          <input 
            type="text"
            id="model"
            name="model"
            onChange={handleInputChange}
            value={newVehicle.model}
            className="form-input"
            placeholder="Car Model"
            required
          />
        </div>
        {/* Adjust the button to be outside the input groups for alignment */}
        <Button type="submit" className="submit-button" style={{ backgroundColor: '#01860f', color: 'white', flexBasis: '16%', marginTop: '30px'}}>
          Add Vehicle
        </Button>
      </form>
      <div className="vehicles-table">
        {/* Table rows for listing vehicles */}
        {vehicles.map((vehicle, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{vehicle.regNumber}</div>
            <div className="table-cell">{vehicle.model}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
