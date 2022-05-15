import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartTotal from '~/components/cartTotal/CartTotal';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import { deleteItem } from '~/redux/cartSlice';
import styles from './Cart.module.css';

const Cart = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  // const item = useSelector((state) => state.cart.products.filter((item) => item.id));

  const handleDeleteItem = (idItem, price, quantity) => {
    console.log('idItem', idItem);
    dispatch(deleteItem({ idItem, price, quantity }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                      <th className={styles.column}>Edit</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={styles.tableBody}>
                <table className={styles.table}>
                  <tbody className={styles.tbody}>
                    {cart.products.map((product) => (
                      <tr className={styles.body} key={product._id}>
                        <td className={styles.column}>
                          <div className={styles.imgContainer}>
                            <img className={styles.img} src={product.img} alt="" />
                          </div>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.name}>{product.title}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.type}>{product.check.title}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.price}>${product.price}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.total}>${product.price * product.quantity}</span>
                        </td>
                        <td className={styles.column}>
                          <button
                            onClick={() => handleDeleteItem(product.idItem, product.price, product.quantity)}
                            className={styles.deleteItem}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <CartTotal disabled={false} typeOfButton={styles.cartButton} button="CHECKOUT NOW!" />
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Cart;
