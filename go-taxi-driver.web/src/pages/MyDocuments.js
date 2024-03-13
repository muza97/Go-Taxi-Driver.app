import React, { useState } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { themeColors } from '../theme/themeColors';



const MyDocuments = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Vänligen välj en fil först.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Ersätt 'din_backend_endpoint' med din faktiska backend endpoint för filuppladdning
      const response = await fetch('din_backend_endpoint', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Filen har laddats upp.');
        // Uppdatera din komponent eller state här för att reflektera den nya filen
      } else {
        alert('Fel vid uppladdning av filen.');
      }
    } catch (error) {
      console.error('Fel:', error);
      alert('Ett fel inträffade under uppladdning.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">My Documents</h2>
          <p className="font-medium text-primary-600 hover:text-primary-500">Manage your documents</p>
        </div>
        <form className="space-y-6" onSubmit={handleFileChange}>
          <input
            type="file"
            className="w-full p-3 border border-gray-300 rounded-md"
            onChange={handleUpload}
            required
          />
          <button
            type="submit"
            className="w-min flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
            style={{ backgroundColor: themeColors.bgColor(1), color: themeColors.text }}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyDocuments;