// /** @type {import('tailwindcss').Config} */
 module.exports = {
   theme: {
     extend: {
       fontSize: {
         'h1': '48px',
         'h2': '36px',
         'h3': '30px',
         'h4': '24px',
         'h5': '20px',
         'h6': '16px',
       },
     },
   },
   content: [
     "./src/**/*.{js,jsx,ts,tsx}", // Alla JavaScript och TypeScript filer i din src katalog
     // Lägg till eventuella andra filer eller sökvägar som kan innehålla Tailwind-klasser
   ],
   // Resten av din Tailwind-konfiguration...
 };

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#eff6ff',
//           100: '#dbeafe',
//           200: '#bfdbfe',
//           300: '#93c5fd',
//           400: '#60a5fa',
//           500: '#3b82f6',
//           600: '#2563eb',
//           700: '#1d4ed8',
//           800: '#1e40af',
//           900: '#1e3a8a',
//           950: '#172554',
//         },
//       },
//       fontFamily: {
//         body: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
//         sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
//       },
//       // Du kan lägga till fler anpassningar här
//     },
//   },
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Sökvägen bör peka till dina filer som innehåller Tailwind-klasser
//   ],
//   // plugins: [], // Om du använder Tailwind-plugins kan du lägga till dem här
// };
