import React from 'react';
import { Link } from 'react-router-dom';
import BannerList from '../components/Banner/BannerList';
import styles from './Gallery.module.css';
import SponsorList from '../components/Sponsors/SponsorList';

export default function Gallery() {
  return (
    <>
      <div className={styles.arrowContainer}>
        <Link to="/" className={styles.arrowLink}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18a856b914b4df9897f34439c8fa1b70047893468b8e0aeecffcb7b72ce1e39e?placeholderIfAbsent=true&apiKey=6e3a7caaac8c4e689de735b2dc99b541"
            className={styles.arrow}
            alt="back arrow"
          />
        </Link>
        <div className={styles.divider} role="separator" />
      </div>
      <h1 className={styles.title}>Home Control</h1>
      <BannerList />
      <SponsorList />
    </>
  );
}
