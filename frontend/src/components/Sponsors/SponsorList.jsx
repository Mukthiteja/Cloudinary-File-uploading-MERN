import React, { useState, useEffect } from "react";
import axios from "axios";
import SponsorCard from "./SponsorCard";
import SponsorUploader from "./SponsorUploader";
import styles from "./SponsorList.module.css";

function SponsorList() {
  const [sponsors, setSponsors] = useState([]);

  const fetchSponsors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/sponsor/sponsors"
      );
      if (Array.isArray(response.data)) {
        setSponsors(response.data);
      } else {
        console.error("API did not return an array.");
      }
    } catch (error) {
      console.error("Error fetching sponsors:", error);
    }
  };

  useEffect(() => {
    fetchSponsors();
  }, []);

  return (
    <div className={styles.container}>
      <SponsorUploader onUploadSuccess={fetchSponsors} />
      <div className={styles.grid}>
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor._id}
            sponsor={sponsor}
            onDeleteSuccess={fetchSponsors}
          />
        ))}
      </div>
    </div>
  );
}

export default SponsorList;
