import React, { useState } from 'react';
import axios from 'axios';
import styles from './SponsorUploader.module.css';

function SponsorUploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('myfile', file);

    try {
      await axios.post('http://localhost:8000/api/sponsor/upload', formData);
      setFile(null);
      setSuccessMessage('File uploaded successfully!');
      setErrorMessage('');
      onUploadSuccess();
    } catch (error) {
      console.error('Error uploading file:', error);
      setSuccessMessage('');
      setErrorMessage('Failed to upload file. Please try again.');
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
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}

export default SponsorUploader;
