import styles from './Cart.module.css';

const CartTotal = () => {
  return (
    <div className={styles.totalWrapper}>
      <h2 className={styles.title}>CART TOTAL</h2>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Subtotal:</b>$30.00
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Discount:</b>$0.00
      </div>
      <div className={styles.totalText}>
        <b className={styles.totalTextTitle}>Total:</b>$30.00
      </div>
      <button className={styles.button}>CHECKOUT NOW!</button>
    </div>
  );
};

export default CartTotal;
