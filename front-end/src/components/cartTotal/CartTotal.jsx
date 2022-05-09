import { Link } from 'react-router-dom';
import styles from './CartTotal.module.css';

const CartTotal = (props) => {
  return (
    <div className={styles.totalWrapper}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Subtotal:</b>$30.00
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Discount:</b>$0.00
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Total:</b>$30.00
      </div>
      <Link className={styles.link} to="/orders">
        <button disabled={props.disabled} className={props.typeOfButton}>
          {props.button}
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
