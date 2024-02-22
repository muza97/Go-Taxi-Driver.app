import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/landing">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/document">My Documents</Link>
      <Link to="/rides">My Rides</Link>
      <Link to="/vehicles">Vehicles</Link>
      <Link to="/riderinvoice">Rider Invoices</Link>
      <Link to="/balance">Balance Reports</Link>
      <Link to="/tax">Tax Reports</Link>
      <Link to="/guide">Guides & FAQ</Link>
      <Link to="/contact">Contact</Link>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;