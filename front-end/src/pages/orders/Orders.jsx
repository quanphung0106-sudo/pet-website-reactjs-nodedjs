import styles from './Order.module.css';
import Navbar from '~/components/navbar/Navbar';
import Footer from '~/components/footer/Footer';
import CartTotal from '~/components/cartTotal/CartTotal';

const Orders = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.delivery}>
              <div className={statusClass(0)}>
                <img className={styles.img} src="/img/paid.png" alt="" />
                <span className={styles.text}>Payment</span>
                <div className={styles.checkedIconWrapper}>
                  <img className={styles.checkedIcon} src="/img/checked.png" alt="" />
                </div>
              </div>
              <div className={statusClass(1)}>
                <img className={styles.img} src="/img/bake.png" alt="" />
                <span className={styles.text}>Preparing</span>
                <img className={styles.checkedIcon} src="/img/checked.png" alt="" />
              </div>
              <div className={statusClass(2)}>
                <img className={styles.img} src="/img/bike.png" alt="" />
                <span className={styles.text}>On the way</span>
                <div className={styles.checkedIconWrapper}>
                  <img className={styles.checkedIcon} src="/img/checked.png" alt="" />
                </div>
              </div>
              <div className={statusClass(3)}>
                <img className={styles.img} src="/img/delivered.png" alt="" />
                <span className={styles.text}>Delivered</span>
                <div className={styles.checkedIconWrapper}>
                  <img className={styles.checkedIcon} src="/img/checked.png" alt="" />
                </div>
              </div>
            </div>

            <table className={styles.table}>
              <tbody>
                <tr className={styles.tr}>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>

                <tr className={styles.tr}>
                  <td className={styles.tdImg}>
                    <span className={styles.id}>13212313123123</span>
                  </td>
                  <td>
                    <span className={styles.name}>Adorable Dog</span>
                  </td>
                  <td>
                    <span className={styles.address}>50 Nguyễn Xuân Hữu, Đà Nẵng</span>
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

export default Orders;
