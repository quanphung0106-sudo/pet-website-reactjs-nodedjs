import styles from './Order.module.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { reset } from '~/redux/cartSlice';
import Navbar from '~/components/navbar/Navbar';
import Footer from '~/components/footer/Footer';
import CartTotal from '~/components/cartTotal/CartTotal';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';

const Orders = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const [data, setData] = useState({});

  const status = data.status;

  useEffect(() => {
    const getItemById = async () => {
      const res = await axios.get(`http://localhost:8801/api/orders/${params.id}`);
      setData(res.data);
      dispatch(reset());
    };
    getItemById();
  }, []);

  console.log(data);

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
              <Link to="/stranger-items">
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
                      <th className={styles.column}>Product</th>
                      <th className={styles.column}>Name</th>
                      <th className={styles.column}>Type</th>
                      <th className={styles.column}>Quantity</th>
                      <th className={styles.column}>Price</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={styles.tableBody}>
                <table className={styles.table}>
                  <tbody className={styles.tbody}>
                    {data.products?.map((item) => (
                      <tr className={styles.body} key={item._id}>
                        <td className={styles.column}>
                          <div className={styles.imgContainer}>
                            <img className={styles.img} src={item.img} alt="" />
                          </div>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.name}>{item.title}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.type}>{item.check.title}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.quantity}>{item.quantityItem}</span>
                        </td>
                        <td className={styles.column}>
                          <span className={styles.price}>${item.totalItem}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.totalWrapper}>
              <h2 className={styles.title}>Order Information</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>OrderID:</b>
                {data._id}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Customer:</b>
                {data.customer}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Address:</b>
                {data.address}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>${data.total}
              </div>
              <button className={styles.orderButton}>PAID!</button>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Orders;
