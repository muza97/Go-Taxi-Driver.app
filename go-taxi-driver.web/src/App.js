// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
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
import Contact from './/pages/Contact';
import './App.css'
import './dist/styles.css'; 
import { AuthProvider } from './auth/AuthContext.js';
import PrivateRoute from './auth/PrivateRoute.js';
import Layout from "./components/Layout.js"




const App = () => {
  return (
    <AuthProvider>
      <Router>
        
       
        
          
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            
              <Route path="/landing" element={<Layout><div>Home</div></Layout>} />
              <Route path="/profile" element={<Layout><Profile /></Layout>} />
              <Route path="/document" element={<Layout><MyDocuments /></Layout>} />
              <Route path="/rides" element={<PrivateRoute><Layout><MyRides /></Layout></PrivateRoute>} />
              <Route path="/vehicles" element={<PrivateRoute><Layout><Vehicles /></Layout></PrivateRoute>} />
              <Route path="/riderinvoice" element={<PrivateRoute><Layout></Layout><RiderInvoices /></PrivateRoute>} />
              <Route path="/balance" element={<PrivateRoute><Layout><BalanceReports /></Layout></PrivateRoute>} />
              <Route path="/tax" element={<PrivateRoute><Layout><TaxReports /></Layout></PrivateRoute>} />
              <Route path="/guide" element={<PrivateRoute><Layout><GuidesFAQ /></Layout></PrivateRoute>} />
              <Route path="/contact" element={<PrivateRoute><Layout><Contact /></Layout></PrivateRoute>} />
              
              </Routes>

    </Router>
    </AuthProvider>
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
