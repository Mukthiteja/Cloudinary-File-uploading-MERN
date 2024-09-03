import React from 'react';
import axios from 'axios';
import styles from './ImageCard.module.css';

function ImageCard({ image, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/gallery/upload/${image._id}`);
      onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className={styles.card}>
      <img src={image.Image_Url} alt="Uploaded" className={styles.image} />
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
}

export default ImageCard;
