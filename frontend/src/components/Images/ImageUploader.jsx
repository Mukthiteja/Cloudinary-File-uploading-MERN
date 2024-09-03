import React, { useState } from 'react';
import axios from 'axios';
import styles from './ImageUploader.module.css';

function ImageUploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSuccessMessage(''); // Clear success message when a new file is selected
    setErrorMessage(''); // Clear error message when a new file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('myfile', file);

    try {
      await axios.post('http://localhost:8000/api/gallery/upload', formData);
      setFile(null);
      setSuccessMessage('File uploaded successfully!'); // Set success message
      setErrorMessage(''); // Clear any previous error message
      onUploadSuccess();
    } catch (error) {
      console.error('Error uploading file:', error);
      setSuccessMessage(''); // Clear success message in case of an error
      setErrorMessage('Failed to upload file. Please try again.'); // Set error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="file"
          onChange={handleFileChange}
          className={styles.input}
          accept="image/*"
        />
        <button type="submit" className={styles.button} disabled={!file}>
          Upload
        </button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>} {/* Display success message */}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Display error message */}
    </div>
  );
}

export default ImageUploader;
