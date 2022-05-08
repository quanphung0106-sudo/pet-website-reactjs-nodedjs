import CartTotal from '~/components/cartTotal/CartTotal';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import styles from './Cart.module.css';

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.tr}>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>

                <tr className={styles.tr}>
                  <td className={styles.tdImg}>
                    <div className={styles.imgContainer}>
                      <img className={styles.img} src="/img/pets.jpg" alt="" />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>Adorable Dog</span>
                  </td>
                  <td>
                    <span className={styles.type}>White Coat</span>
                  </td>
                  <td>
                    <span className={styles.price}>$15.00</span>
                  </td>
                  <td>
                    <span className={styles.quantity}>2</span>
                  </td>
                  <td>
                    <span className={styles.total}>$30.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.right}>
            <CartTotal />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
