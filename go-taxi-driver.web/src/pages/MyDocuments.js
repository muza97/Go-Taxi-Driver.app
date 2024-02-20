import React, { useState } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';

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
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5">Mina Dokument</Typography>
      <input type="file" onChange={handleFileChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        style={{ marginTop: '16px' }}
      >
        Ladda upp
      </Button>
    </Paper>
  );
};

export default MyDocuments;
