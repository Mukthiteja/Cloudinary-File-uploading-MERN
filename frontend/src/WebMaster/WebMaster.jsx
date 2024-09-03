import React from "react";
import { Link } from "react-router-dom";
import styles from "./WebMaster.module.css";
import Card from "./Card";
import EditHome from "./EditHome";
import Navbar from "./Navbar";

const WebMaster = () => {
  const cardData = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0b2c6d4927e4ab4fb88c299f5820803c6e336f109037ea223f41d62039ec51ab?placeholderIfAbsent=true&apiKey=6e3a7caaac8c4e689de735b2dc99b541",
      altText: "Web Master feature 1",
      link: "/EditHome",// Link to EditHome
    },
    {/*
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2238ac43ea140d2a623d5b3179f944d5f46fe3f804b14d72d09a086987aa9611?placeholderIfAbsent=true&apiKey=6e3a7caaac8c4e689de735b2dc99b541",
      altText: "Web Master feature 2",
      link: "/feature2", // Link to feature2*/
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/218efaa7d02c02c2667e70616eecfe0b0eae2ff726bad6590d533f054bf00be1?placeholderIfAbsent=true&apiKey=6e3a7caaac8c4e689de735b2dc99b541",
      altText: "Gallery",
      link: "/Gallery", // Link to feature3
    },
    {
      /*imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/504e8dfe4d977acdb0c7177d167f1ec23f42921d7c31aa9bb33393e70c77b773?placeholderIfAbsent=true&apiKey=6e3a7caaac8c4e689de735b2dc99b541",
      altText: "Web Master feature 4",
      link: "/feature4", // Link to feature4*/
    },
  ];

  return (
    <main id="WebMaster" className={styles.container}>
      <h1 className={styles.title}>Web Master</h1>
      <Navbar/>
      {[...Array(2)].map((_, index) => (
        <section key={index} className={styles.gridContainer}>
          <div className={styles.grid}>
            {cardData.slice(index * 2, index * 2 + 2).map((card, cardIndex) => (
              <div key={cardIndex} className={styles.gridItem}>
                <Link to={card.link} className={styles.cardLink}>
                  <Card imageSrc={card.imageSrc} altText={card.altText} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default WebMaster;
