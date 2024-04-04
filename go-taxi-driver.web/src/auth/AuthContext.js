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
    if (!authToken) {
      setLoading(false);
      return;
    }
    console.log('Fetching user with token:', authToken);
    try {
      const userProfile = await getUserProfile(authToken);
      console.log('Fetched user profile:', userProfile);
      setUser(userProfile);
    } catch (error) {
      console.error('Problem fetching user profile:', error);
    } finally {
      setLoading(false);
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
  const updateAvatar = async (imageFile) => {
    if (!authToken) return;
    const formData = new FormData();
    formData.append('avatar', imageFile);
  
    try {
      const response = await fetch('https://api-g36q5boh2q-uc.a.run.app/api/upload-avatar', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
  
      const updatedUser = await response.json();
      setUser((currentUser) => ({ ...currentUser, avatar: updatedUser.avatar }));
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout, setUser,updateAvatar }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
