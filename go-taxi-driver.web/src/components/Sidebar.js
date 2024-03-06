import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; 
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import CommuteIcon from '@material-ui/icons/Commute';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/landing"><HomeIcon /> Home</Link>
      <Link to="/profile"><PersonIcon /> Profile</Link>
      <Link to="/document"><DescriptionIcon /> My Documents</Link>
      <Link to="/rides"><CommuteIcon /> My Rides</Link>
      <Link to="/vehicles"><DirectionsCarIcon /> Vehicles</Link>
      <Link to="/riderinvoice"><ReceiptIcon /> Rider Invoices</Link>
      <Link to="/balance"><AccountBalanceIcon /> Balance Reports</Link>
      <Link to="/tax"><MonetizationOnIcon /> Tax Reports</Link>
      <Link to="/guide"><QuestionAnswerIcon /> Guides & FAQ</Link>
      <Link to="/contact"><ContactSupportIcon /> Contact</Link>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
