// import React, { useState } from 'react';
// import { TextField, Button, Paper, Typography, AppBar, Toolbar, Link } from '@material-ui/core';
// import { useNavigate } from 'react-router-dom'; // Importera useNavigate
// import '../dist/styles.css'; 
// //import '../style/login.css'
// import { useAuth } from '../auth/AuthContext';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Skapa en instans av useNavigate
//   const { login } = useAuth();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://api-focnoae3da-uc.a.run.app/api/login/driver', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Inloggning lyckades:', data);
//         login(data.token); 
//         navigate('/landing'); 
//       } else {
//         // Felhantering, visa ett felmeddelande
//         alert('Inloggning misslyckades. Försök igen.');
//         navigate('/')
//       }
//     } catch (error) {
//       console.error('Ett fel inträffade:', error);
//       alert('Ett fel inträffade. Försök igen.');
//     }
// };


//   return (
//     <>
//     <AppBar position="static">
//       <Toolbar>
//       <Button color="inherit" component={Link} to="/">Login</Button>
//       </Toolbar>
//     </AppBar>
    
//     <div className="sm:mx-auto sm:w-full sm:max-w-md">
//       <h1 className="text-center text-4xl font-medium text-gray-900 mb-4">Driver Login</h1>
//       <div className="mt-10 bg-white py-8 px-4 shadow rounded-lg sm:px-10">
//       <div className="flex- max-h-screen justify-center items-center bg-gray-80 py-8 px-4 sm:px-6 lg:px-8">
//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               onChange={handleChange}
//               value={credentials.email}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center justify-between">
//             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//               Password
//             </label>
//             <div className="text-sm">
//               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//           <div className="mt-2">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               onChange={handleChange}
//               value={credentials.password}
//               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign in
//           </button>
//         </div>
//       </form>

//       <p className="mt-10 text-center text-sm text-gray-500">
//         Not a member? Create an account{' '}
//         <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//         </a>
//       </p>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom'; // Importera useNavigate
import { useAuth } from '../auth/AuthContext'; // Antaget att din AuthContext ligger i /auth mappen
import { themeColors } from '../theme/themeColors';


const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Skapa en instans av useNavigate
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-hdzvzie4ya-uc.a.run.app/api/login/driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Inloggning lyckades:', data.token);
        login(data.token); 
        navigate('/landing'); 
      } else {
        // Felhantering, visa ett felmeddelande
        alert('Inloggning misslyckades. Försök igen.');
        navigate('/')
      }
    } catch (error) {
      console.error('Ett fel inträffade:', error);
      alert('Ett fel inträffade. Försök igen.');
    }
};

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="p-4 w-full flex justify-between items-center bg-white shadow">
        <span className="font-semibold text-xl text-gray-900">City Cab</span>
        <button
          className="font-bold py-2 px-4 rounded"
          style={{ backgroundColor: themeColors.bgColor(1), color: themeColors.text }}
          onClick={() => navigate('/landing')}
        >
          Log in
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Driver Login</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={credentials.email}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
              style={{ backgroundColor: themeColors.bgColor(1), color: themeColors.text }}
            >
              Sign in
            </button>
          </form>
          <div className="text-center">
            <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
              Don't have an account yet? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;