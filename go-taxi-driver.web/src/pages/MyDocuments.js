import React, { useState, useRef } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { themeColors } from '../theme/themeColors';

const MyDocuments = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };
  
  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log("Uploading file...");
    if (!selectedFile) {
      console.log('No file selected.');
      setUploadStatus('Please select a file first.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      console.log("Sending file to server...");
      const response = await fetch('http://localhost:3000/api/uploadDocument', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log("File uploaded successfully.");
        setUploadStatus('File has been uploaded successfully.');
        setSelectedFile(null);
        setSelectedFileName('');
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }
      } else {
        console.log("Error uploading file.");
        setUploadStatus('Error uploading file.');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log("An error occurred during the upload.");
      setUploadStatus('An error occurred during the upload.');
    }
  };
  return (
    <div className="bg-white p-20 rounded-xl min-w-md w-full mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">My Documents</h2>
        <p className="mb-6 text-gray-600">Manage your documents</p>
      </div>
      <form className="space-y-6" onSubmit={handleUpload}>
        <div className="flex justify-center items-center w-full">
          <label htmlFor="file-upload" className="flex flex-col justify-center items-center w-full h-64 border-2 border-gray-300 border-dashed rounded-md bg-white">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Drag and drop some files here, or click to
select files
              </p>
            </div>
            <input id="file-upload" name="file-upload" type="file" className="opacity-0" onChange={handleFileChange} ref={fileInputRef} />
          </label>
        </div>
        <Typography variant="subtitle1" style={{ color: themeColors.alert }}>Selected file: {selectedFileName || 'No file selected'}</Typography>
        <Button
          type="submit"
          className="w-min flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
          style={{ backgroundColor: themeColors.primary }}
        >
          Upload
        </Button>
        {uploadStatus && <Typography variant="subtitle1" style={{ color: themeColors.error }}>{uploadStatus}</Typography>}
      </form>
    </div>
  );
};

export default MyDocuments;