import styles from './Benefits.module.css';
import { useState, useEffect } from 'react';

const Benefits = (props) => {
  const [scrollY, setScrollY] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 890 && window.scrollY < 1521) {
        document.getElementsByClassName(styles.topItem);
        document.getElementsByClassName(styles.img);
        document.getElementsByClassName(styles.img2);
        document.getElementsByClassName(styles.modalWrapper);
        document.getElementsByClassName(styles.textWrapper);
        setScrollY(true);
        if (scrollY === true) {
          setShow(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {show && (
          <div className={`${styles.topItem} ${scrollY ? styles.activeTopItem : ''}`}>
            {show && <img className={`${styles.img} ${scrollY ? styles.activeImg : ''}`} src="/img/pet.png" alt="" />}
          </div>
        )}
      </div>
      <div className={styles.item}>
        <div className={styles.modalContainer}>
          {show && (
            <div className={`${styles.modalWrapper} ${scrollY ? styles.activeModalWrapper : ''}`}>
              <h4 className={styles.title}>Why Dogs Make You Happy</h4>
              <p className={styles.text}>
                Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eu consequat ac felis donec et odio
                pellentesque. Turpis nunc eget lorem dolor sed. Ornare quam viverra orci sagittis eu volutpat odio. Sed
                vulputate odio ut enim blandit volutpat.
              </p>
              <button className={styles.button}>READ MORE</button>
            </div>
          )}

          {show && (
            <div className={`${styles.textWrapper} ${scrollY ? styles.activeTextWrapper : ''}`}>
              <h1 className={styles.title}>Dogs improve your mood:</h1>
              <ul className={styles.ul}>
                <li className={styles.li}>Duis are iruhe dolor in</li>
                <li className={styles.li}>Expepteur sint occaecat</li>
                <li className={styles.li}>Utenim ad minim</li>
                <li className={styles.li}>Lorem ipsum dolor</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          {show && <img className={`${styles.img2} ${scrollY ? styles.activeImg2 : ''}`} src="/img/pets.jpg" alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
