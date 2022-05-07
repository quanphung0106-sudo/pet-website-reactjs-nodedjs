import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link to="/products/:productId">
          <div className={styles.imgContainer}>
            <img className={styles.img} src="/img/pets.jpg" alt="" />
          </div>
        </Link>

        <div className={styles.sale}>Sale</div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>Fancy Product</h3>
        <div className={styles.prices}>
          <del className={styles.price}>$25.00</del> $15.00
        </div>
        <Link to="/products/:productId">
          <button className={styles.button}>View options</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
