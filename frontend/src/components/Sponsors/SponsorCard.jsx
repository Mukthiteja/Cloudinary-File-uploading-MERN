import React from 'react';
import axios from 'axios';
import styles from './SponsorCard.module.css';

function SponsorCard({ sponsor, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/sponsor/upload/${sponsor._id}`);
      onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting sponsor:', error);
    }
  };

  return (
    <div className={styles.card}>
      <img src={sponsor.Sponsor_Url} alt="Sponsor" className={styles.sponsor} />
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
}

export default SponsorCard;
