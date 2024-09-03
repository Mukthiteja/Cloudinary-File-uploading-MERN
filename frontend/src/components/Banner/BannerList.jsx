import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerCard from '../Banner/BannerCard';
import BannerUploader from '../Banner/BannerUploader';
import styles from './BannerList.module.css';

function BannerList() {
  const [banners, setBanners] = useState([]);

  const fetchBanners = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/poster/banners');
      if (Array.isArray(response.data)) {
        setBanners(response.data);
      } else {
        console.error('API did not return an array.');
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className={styles.container}>
      <BannerUploader onUploadSuccess={fetchBanners} />
      <div className={styles.grid}>
        {banners.map((banner) => (
          <BannerCard key={banner._id} banner={banner} onDeleteSuccess={fetchBanners} />
        ))}
      </div>
    </div>
  );
}

export default BannerList;
