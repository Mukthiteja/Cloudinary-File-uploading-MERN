import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import ImageUploader from "./ImageUploader";

function ImageList() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/images"); // Ensure the full URL
      // Ensure the response data is an array
      if (Array.isArray(response.data)) {
        setImages(response.data);
      } else {
        console.error("API did not return an array.");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <ImageUploader onUploadSuccess={fetchImages} />
      <div className="image-list">
        {images.map((image) => (
          <ImageCard key={image._id} image={image} onDeleteSuccess={fetchImages} />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
