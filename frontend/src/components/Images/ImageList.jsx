import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from '../Images/ImageCard';
import ImageUploader from '../Images/ImageUploader';
import styles from './ImageList.module.css';

function ImageList() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/gallery/images');
      if (Array.isArray(response.data)) {
        setImages(response.data);
      } else {
        console.error('API did not return an array.');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={styles.container}>
      <ImageUploader onUploadSuccess={fetchImages} />
      <div className={styles.grid}>
        {images.map((image) => (
          <ImageCard key={image._id} image={image} onDeleteSuccess={fetchImages} />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
