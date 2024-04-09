// authService.js

const getUserProfile = async (token) => {
    console.log('getUserProfile called with token:', token); // Logga anropet med token
    const response = await fetch('https://api-g36q5boh2q-uc.a.run.app/api/driver/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log('Response from getUserProfile:', response.status); // Logga svarstatus

    if (!response.ok) {
      throw new Error('Problem med att hämta användarprofil');
    }

    const userProfile = await response.json();
    console.log('User profile data:', userProfile); // Logga användarprofildata
    return userProfile;
};
  
  export default getUserProfile;
  