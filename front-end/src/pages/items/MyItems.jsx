import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '~/components/footer/Footer';
import Navbar from '~/components/Header/Header';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import styles from './MyItems.module.css';

const MyItem = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await axios.get('http://localhost:8808/api/orders');
      setData(res.data);
    };
    getAllOrders();
  });

  const navigateToDetailItem = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
                  {data.map((order) => (
                    <tr onClick={() => navigateToDetailItem(order._id)} className={styles.body} key={order._id}>
                      <td className={styles.column}>
                        <span className={styles.orderId}>{order._id}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.customer}>{order.customer}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.address}>{order.address}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.total}>${order.total}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default MyItem;
