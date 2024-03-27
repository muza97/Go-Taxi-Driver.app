import React, { createContext, useContext, useState, useEffect } from 'react';
import getUserProfile from './AuthService'; // Check that the path is correct

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  console.log('AuthProvider init'); // Första loggen för att se när AuthProvider initieras

  const [authToken, setAuthToken] = useState(localStorage.getItem('driverToken'));
  console.log('Current authToken:', authToken); // Logga nuvarande token

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    console.log('Fetching user with token:', authToken); // Logga när vi försöker hämta användaren
    if (authToken) {
      try {
        const userProfile = await getUserProfile(authToken);
        console.log('Fetched user profile:', userProfile); // Logga hämtad användarprofil
        setUser(userProfile);
      } catch (error) {
        console.error('Problem fetching user profile:', error);
      }finally {
        setLoading(false); // Indikera att laddningen är klar
      }
  
    }
  };

  useEffect(() => {
    fetchUser();
  }, [authToken]);
  if (loading) {
    return <div>Loading...</div>; // Eller någon form av spinner/loading indikator
  }


  const login = (token) => {
    localStorage.setItem('driverToken', token);
    setAuthToken(token);
    fetchUser(); // Call fetchUser directly to update the user data
  };

  const logout = () => {
    localStorage.removeItem('driverToken');
    setAuthToken(null);
    setUser(null); // Also reset the user state
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
