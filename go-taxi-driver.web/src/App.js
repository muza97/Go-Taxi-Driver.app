// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Landing from './pages/LandingPage.js';
import Profile from './pages/Profile.js';
import MyDocuments from './pages/MyDocuments.js';
import MyRides from './pages/MyRides.js';
import Vehicles from './pages/Vehicles.js';
import RiderInvoices from './pages/RiderInvoices.js';
import BalanceReports from './pages/BalanceReports.js';
import TaxReports from './pages/TaxReports.js';
import GuidesFAQ from './pages/GuidesFAQ.js';
import Sidebar from  "./components/Sidebar.js";
import './App.css'

const App = () => {
  return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </Toolbar>
        </AppBar>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<div>Home</div>} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/document" element={<MyDocuments />} />
              <Route path="/rides" element={<MyRides />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/riderinvoice" element={<RiderInvoices />} />
              <Route path="/balance" element={<BalanceReports />} />
              <Route path="/tax" element={<TaxReports />} />
              <Route path="/guide" element={<GuidesFAQ />} />
              </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;




// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
// import Login from './pages/Login.js';
// import Register from './pages/Register';
// import { AppBar, Toolbar, Button } from '@material-ui/core';
// import Landing from './pages/LandingPage.js';
// import Profile from './pages/Profile.js';
// import MyDocuments from './pages/MyDocuments.js';
// import MyRides from './pages/MyRides.js';
// import Vehicles from './pages/Vehicles.js';
// import RiderInvoices from './pages/RiderInvoices.js';
// import BalanceReports from './pages/BalanceReports.js';
// import TaxReports from './pages/TaxReports.js';
// import GuidesFAQ from './pages/GuidesFAQ.js';
// import Sidebar from './components/sidebar.js';

// const App = () => {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" component={Link} to="/login">Login</Button>
//           <Button color="inherit" component={Link} to="/register">Register</Button>
//         </Toolbar>
//       </AppBar>
//       <Routes>
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element= {<Register/>} />
//         <Route path="/" element={() => <div>Home</div>} />
//         <Route path="/landing" element={<Landing/>} />
//         <Route path="/profile" element={<Profile/>} />
//         <Route path="/document" element={<MyDocuments/>} />
//         <Route path="/rides" element={<MyRides/>} />
//         <Route path="/vehicles" element={<Vehicles/>} />
//         <Route path="/riderinvoice" element={<RiderInvoices/>} />
//         <Route path="/balance" element={<BalanceReports/>} />
//         <Route path="/tax" element={<TaxReports/>} />
//         <Route path="/guide" element={<GuidesFAQ/>} />


//       </Routes>
//     </Router>
//   );
// };

// export default App;
