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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useAuth } from '../auth/AuthContext';
import { useState, useEffect } from 'react';


const Sidebar = () => {
  /*const user = {
    name: 'User\'s Full Name',
    avatar: process.env.PUBLIC_URL + '/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg'// replace with actual path to user's avatar image
  };*/

  const{user,setUser,updateAvatar} = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultAvatar = process.env.PUBLIC_URL + '/standardprofilephoto.jpg';
  const imageUrl = user && user.avatar ? `http://localhost:3000${user.avatar}` : defaultAvatar;

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Förhandsvisning av bilden
      await updateAvatar(file); // Använd funktionen från din AuthProvider för att ladda upp bilden
    }
  };
  
    const triggerFileInput = () => {
    document.getElementById('imageInput').click();
  };

  useEffect(() => {
    return () => {
      if (selectedImage) {
        console.log('Cleaning up selected image');
        URL.revokeObjectURL(selectedImage.preview);
        setSelectedImage(null);
      }
    };
  }, [selectedImage]);
 


  return (
    <div className="sidebar">
  {/* Logo container at the very top */}
  <div className="logo-container">
    <Link to="/landing" className="font-semibold text-xl text-gray-900">City Cab</Link>
  </div>

      <div className="user-profile"onClick={triggerFileInput}>
      <img src={imageUrl} alt="Profile" className="profile-pic" />
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
        <div className="user-info">
         <p className="user-name">{user?.name}</p>
           { (
          <span className="online-icon">
          <FiberManualRecordIcon style={{ fontSize: '0.7rem' }} />
        </span>
         )}
       </div>

        </div>
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
