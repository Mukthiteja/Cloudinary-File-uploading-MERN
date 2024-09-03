import React from 'react';
import axios from 'axios';
import styles from './BannerCard.module.css';

function BannerCard({ banner, onDeleteSuccess }) {  // Corrected prop name to 'banner'
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/poster/upload/${banner._id}`);
      onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting banner:', error);
    }
  };

  return (
    <div className={styles.card}>
      <img src={banner.Banner_Url} alt="Uploaded" className={styles.banner} />
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
}

export default BannerCard;
