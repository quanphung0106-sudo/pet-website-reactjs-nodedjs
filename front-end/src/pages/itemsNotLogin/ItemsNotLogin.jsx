import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import styles from './ItemsNotLogin.module.css';

const ItemsNotLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [id, setId] = useState('');

  const getItemById = async () => {
    try {
      const res = await axios.get(`http://localhost:8801/api/orders/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const navigateToDetailItem = () => {
    navigate(`/orders/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.searchWrapper}>
            <input
              onChange={(e) => setId(e.target.value)}
              className={styles.search}
              type="text"
              placeholder="Search item by order id"
            />
            <SearchOutlinedIcon onClick={getItemById} className={styles.searchIcon} />
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
                  <tr onClick={navigateToDetailItem} className={styles.body}>
                    <td className={styles.column}>
                      <span className={styles.orderId}>{data._id}</span>
                    </td>
                    <td className={styles.column}>
                      <span className={styles.customer}>{data.customer}</span>
                    </td>
                    <td className={styles.column}>
                      <span className={styles.address}>{data.address}</span>
                    </td>
                    <td className={styles.column}>
                      <span className={styles.total}>
                        {Object.keys(data).length === 0 ? '' : '$'}
                        {data.total}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ItemsNotLogin;
