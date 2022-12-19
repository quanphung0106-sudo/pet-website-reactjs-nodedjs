import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./Scroll.module.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return (
    <>
      {visible && (
        <ArrowBackIosNewIcon
          onClick={scrollToTop}
          className={styles.Scroll}
          style={{ width: 45, height: 45 }}
        />
      )}
    </>
  );
};

export default ScrollToTop;
