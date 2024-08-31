import React, { useState } from "react";
import axios from "axios";

function ImageUploader({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myfile", file);

    try {
      // Updated URL
      await axios.post("http://localhost:8000/api/upload", formData);
      onUploadSuccess(); // Trigger refetching of images after upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploader;
