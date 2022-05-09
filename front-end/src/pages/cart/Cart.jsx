import CartTotal from '~/components/cartTotal/CartTotal';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import styles from './Cart.module.css';

const Cart = (props) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.tableWrapper}>
              <div className={styles.tableHead}>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.head}>
                      <th className={styles.column}>Product</th>
                      <th className={styles.column}>Name</th>
                      <th className={styles.column}>Type</th>
                      <th className={styles.column}>Price</th>
                      <th className={styles.column}>Quantity</th>
                      <th className={styles.column}>Total</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={styles.tableBody}>
                <table className={styles.table}>
                  <tbody className={styles.tbody}>
                    <tr className={styles.body}>
                      <td className={styles.column}>
                        <div className={styles.imgContainer}>
                          <img className={styles.img} src="/img/pets.jpg" alt="" />
                        </div>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.name}>Adorable Dog</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>White Coat</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>$15.00</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>2</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.total}>$30.00</span>
                      </td>
                    </tr>
                    <tr className={styles.body}>
                      <td className={styles.column}>
                        <div className={styles.imgContainer}>
                          <img className={styles.img} src="/img/pets.jpg" alt="" />
                        </div>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.name}>Adorable Dog</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>White Coat</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>$15.00</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>2</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.total}>$30.00</span>
                      </td>
                    </tr>
                    <tr className={styles.body}>
                      <td className={styles.column}>
                        <div className={styles.imgContainer}>
                          <img className={styles.img} src="/img/pets.jpg" alt="" />
                        </div>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.name}>Adorable Dog</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>White Coat</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>$15.00</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>2</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.total}>$30.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <CartTotal disabled={false} typeOfButton={styles.cartButton} title="CART TOTAL" button="CHECKOUT NOW!" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
