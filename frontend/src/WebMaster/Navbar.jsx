import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import axios from "axios"

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true });
      alert("logout successful");
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <span className={styles.name}>Team Jatayu Kernel</span>
      </div>
      <div className={styles.menu}>
        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
