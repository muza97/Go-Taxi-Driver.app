// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
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

// import Contact from './/pages/Contact';
// import './App.css'
// import './dist/styles.css'; 
// import { AuthProvider } from './auth/AuthContext.js';
// import PrivateRoute from './auth/PrivateRoute.js';
// import Layout from "./components/Layout.js"




// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
        
       
        
          
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/register" element={<Register />} />
            
//               <Route path="/landing" element={<Layout> <Landing /></Layout>} />
//               <Route path="/profile" element={<Layout><Profile /></Layout>} />
//               <Route path="/document" element={<Layout><MyDocuments /></Layout>} />
//               <Route path="/rides" element={<PrivateRoute><Layout><MyRides /></Layout></PrivateRoute>} />
//               <Route path="/vehicles" element={<PrivateRoute><Layout><Vehicles /></Layout></PrivateRoute>} />
//               <Route path="/riderinvoice" element={<PrivateRoute><Layout></Layout><RiderInvoices /></PrivateRoute>} />
//               <Route path="/balance" element={<PrivateRoute><Layout><BalanceReports /></Layout></PrivateRoute>} />
//               <Route path="/tax" element={<PrivateRoute><Layout><TaxReports /></Layout></PrivateRoute>} />
//               <Route path="/guide" element={<PrivateRoute><Layout><GuidesFAQ /></Layout></PrivateRoute>} />
//               <Route path="/contact" element={<PrivateRoute><Layout><Contact /></Layout></PrivateRoute>} />
              
//               </Routes>

//     </Router>
//     </AuthProvider>
//   );
// };


// export default App;


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
            
              <Route path="/landing" element={<Layout> <Landing /></Layout>} />
              <Route path="/profile" element={<Layout><Profile /></Layout>} />
              <Route path="/document" element={<Layout><MyDocuments /></Layout>} />
              <Route path="/rides" element={<Layout><MyRides /></Layout>} />
              <Route path="/vehicles" element={<Layout><Vehicles /></Layout>} />
              <Route path="/riderinvoice" element={<Layout><RiderInvoices /></Layout>} />
              <Route path="/balance" element={<Layout><BalanceReports /></Layout>} />
              <Route path="/tax" element={<Layout><TaxReports /></Layout>} />
              <Route path="/guide" element={<Layout><GuidesFAQ /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              
              </Routes>

    </Router>
    </AuthProvider>
  );
};


export default App;






