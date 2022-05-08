import styles from './Navbar.module.css';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callIcon}>
          <PhoneEnabledIcon />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>BUY NOW!</div>
          <div className={styles.text}>0935 123 456</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.ul}>
          <Link to="/">
            <li className={styles.li}>Homepage</li>
          </Link>
          <Link to="/products">
            <li className={styles.li}>Pet</li>
          </Link>
          <li className={styles.li}>Menu</li>
          <img className={styles.img} src="/img/logo.png" alt="" />
          {/* <div className={styles.imgContainer}>
          </div> */}
          <li className={styles.li}>Events</li>
          <li className={styles.li}>Blog</li>
          <a>
            <li className={styles.li}>Contact</li>
          </a>
        </ul>
      </div>
      <div className={styles.item}>
        <Link to="/cart">
          <div className={styles.cart}>
            <ShoppingCartIcon className={styles.cartIcon} />
            <div className={styles.counter}>2</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
