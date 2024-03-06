import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const { authToken } = useAuth();
    const location = useLocation();
    console.log(authToken);
  
    if (!authToken) {
      
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children; 
  };
  
  export default PrivateRoute;
