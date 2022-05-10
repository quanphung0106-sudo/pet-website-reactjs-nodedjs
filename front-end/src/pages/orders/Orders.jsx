import styles from './Order.module.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Navbar from '~/components/navbar/Navbar';
import Footer from '~/components/footer/Footer';
import CartTotal from '~/components/cartTotal/CartTotal';
import { Link } from 'react-router-dom';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';

const Orders = (props) => {
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
            <div className={styles.buttonWrapper}>
              <Link to="/my-items">
                <button className={styles.goBackButton}>
                  <ArrowBackOutlinedIcon className={styles.icon} />
                  <span>Quay lại danh sách đơn hàng</span>
                </button>
              </Link>
            </div>
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

            <div className={styles.tableWrapper}>
              <div className={styles.tableHead}>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.head}>
                      <th className={styles.column}>Order ID</th>
                      <th className={styles.column}>Customer</th>
                      <th className={styles.column}>Address</th>
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
                        <span className={styles.name}>1231231231</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>Quan Phung</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>52 Nguyen Xuan Huu, Da Nang</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>$30.00</span>
                      </td>
                    </tr>
                    <tr className={styles.body}>
                      <td className={styles.column}>
                        <span className={styles.name}>1231231231</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>Quan Phung</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>52 Nguyen Xuan Huu, Da Nang</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>$30.00</span>
                      </td>
                    </tr>
                    <tr className={styles.body}>
                      <td className={styles.column}>
                        <span className={styles.name}>1231231231</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.type}>Quan Phung</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.price}>52 Nguyen Xuan Huu, Da Nang</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.quantity}>$30.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <CartTotal
              link={'/orders'}
              disabled={true}
              typeOfButton={styles.orderButton}
              title="CART TOTAL"
              button="PAID!"
            />
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Orders;
