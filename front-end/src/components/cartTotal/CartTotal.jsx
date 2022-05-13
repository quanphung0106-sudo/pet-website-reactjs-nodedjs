import { Link } from 'react-router-dom';
import styles from './CartTotal.module.css';

const CartTotal = ({ cart, disabled, typeOfButton, button }) => {
  console.log(cart);
  return (
    <div className={styles.totalWrapper}>
      <h2 className={styles.title}>CART TOTAL</h2>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Discount:</b>$0.00
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Total:</b>${cart.total}
      </div>
      <Link className={styles.link} to="/orders">
        <button disabled={disabled} className={typeOfButton}>
          {button}
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
