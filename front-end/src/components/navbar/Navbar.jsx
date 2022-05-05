import styles from "./Navbar.module.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          <li className={styles.li}>Homepage</li>
          <li className={styles.li}>Pet</li>
          <li className={styles.li}>Menu</li>
          <img className={styles.img} src="/img/logo.png" alt="" />
          {/* <div className={styles.imgContainer}>
          </div> */}
          <li className={styles.li}>Events</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <ShoppingCartIcon className={styles.cartIcon} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
