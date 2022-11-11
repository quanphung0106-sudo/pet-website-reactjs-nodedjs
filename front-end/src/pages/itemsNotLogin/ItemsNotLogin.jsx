import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Footer from '~/components/footer/Footer';
import Navbar from '~/components/Header/Header';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import styles from './ItemsNotLogin.module.css';

const ItemsNotLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [id, setId] = useState('');
  // const [localStorageItems, setLocalStorageItems] = useState({});

  // useEffect(() => {
  //   const getItem = JSON.parse(localStorage.getItem('item'));
  //   if (getItem) setLocalStorageItems(getItem);
  // }, []);

  // console.log(localStorageItems);

  const getItemById = async () => {
    try {
      const res = await axios.get(`https://pet-website-reactjs-nodejs.herokuapp.com/api/orders/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const navigateToDetailItem = () => {
    navigate(`/orders/${id}`);
  };

  console.log(data);

  return (
    <>
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
          {Object.keys(data).length !== 0 ? (
            <>
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
            </>
          ) : (
            <div className={styles.textWrapper}>
              <h4 style={{ color: 'black' }}>*Nhập mã Order ID để xem thông tin đơn hàng</h4>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default ItemsNotLogin;
