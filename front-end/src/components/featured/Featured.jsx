import React, { useEffect, useState } from "react";
import styles from "./Featured.module.css";
const Featured = () => {
  const [scrollY, setScrollY] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 95 && window.scrollY < 900) {
        document.getElementsByClassName(styles.subImg);
        document.getElementsByClassName(styles.texts);
        setScrollY(true);
        if (scrollY === true) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.featuredContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src="/img/background.png" alt="" />
        {show && (
          <img
            className={`${styles.subImg} ${scrollY ? styles.activeImg : ""}`}
            src="/img/kiss-pet.png"
            alt=""
          />
        )}
        {show && (
          <div
            className={`${styles.texts} ${scrollY ? styles.activeText : ""}`}
          >
            <h1 className={styles.text}>We make pets pretty!</h1>
            <p className={styles.text}>
              They were very nice to Russy and he enjoyed getting his hair cut
              together with the other dogs.
            </p>
            <button className={styles.button}>READ MORE</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
