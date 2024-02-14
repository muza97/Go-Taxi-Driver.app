// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/" element={() => <div>Home</div>} />
      </Routes>
    </Router>
  );
};

export default App;
