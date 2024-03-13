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
    <div className="bg-white p-20 rounded-xl  min-w-md w-full mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">My Documents</h2>
        <p className="mb-6 text-gray-600">Manage your documents</p>
      </div>
      <form className="space-y-6">
        <div className="flex justify-center items-center w-full">
          <label htmlFor="file-upload" className="flex flex-col justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded-md bg-white">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Drag and drop some files here, or click to select files
              </p>
            </div>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0" onChange={handleFileChange} />
          </label>
        </div>
        <button
          type="submit"
          className="w-min flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
          style={{ backgroundColor: '#01860f' }}
          onClick={handleUpload}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default MyDocuments;