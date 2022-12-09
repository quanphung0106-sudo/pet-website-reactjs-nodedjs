import { useSelector } from 'react-redux';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from '../error/Error';

const cx = classNames.bind(styles);

const Admin = () => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => state.user.user);
  const isAdmin = user !== null && user.isAdmin;

  const navigate = useNavigate();

  useEffect(() => {
    const getAllItems = async () => {
      const res = await axios.get('http://localhost:8808/api/items');
      setItems(res.data);
    };
    getAllItems();
  }, []);

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await axios.get('http://localhost:8808/api/orders');
      setOrders(res.data);
    };
    getAllOrders();
  }, []);

  const navigateToDetailItem = (id) => {
    navigate(`/products/${id}`);
  };

  const navigateToDetailOrder = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <>
      {isAdmin ? (
        <div className={cx('container')}>
          <div className={cx('left')}>
            <div className={cx('top-left')}>
              <h1>Products</h1>
              <button className={cx('add-new-btn')}>Add new Product</button>
            </div>
            <div className={cx('tableWrapper')}>
              <div className={cx('tableHead')}>
                <table className={cx('table')}>
                  <thead>
                    <tr className={cx('head')}>
                      <th className={cx('column')}>Product</th>
                      <th className={cx('column')}>Product ID</th>
                      <th className={cx('column')}>Name</th>
                      <th className={cx('column')}>Price</th>
                      <th className={cx('column')}>Edit</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={cx('tableBody')}>
                <table className={cx('table')}>
                  <tbody className={cx('tbody')}>
                    {items.map((product) => (
                      <tr className={cx('body')} onClick={() => navigateToDetailItem(product._id)} key={product._id}>
                        <td className={cx('column')}>
                          <div className={cx('imgContainer')}>
                            <img src={product.img} alt="" className={cx('img')} />
                          </div>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('productId')}>{product._id.slice(0, 9)}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('title')}>{product.title}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('price')}>
                            ${product.typeOfOptions[0].price}- {product.typeOfOptions[1].price}
                          </span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('edit')}>
                            <button className={cx('edit-btn')}>Edit</button>
                            <button className={cx('delte-btn')}>Delete</button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={cx('right')}>
            <h1 className={cx('top-right')}>Orders</h1>
            <div className={cx('tableWrapper')}>
              <div className={cx('tableHead')}>
                <table className={cx('table')}>
                  <thead>
                    <tr className={cx('head')}>
                      <th className={cx('column')}>Order ID</th>
                      <th className={cx('column')}>Customer</th>
                      <th className={cx('column')}>Total</th>
                      <th className={cx('column')}>Payment</th>
                      <th className={cx('column')}>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={cx('tableBody')}>
                <table className={cx('table')}>
                  <tbody className={cx('tbody')}>
                    {orders.map((order) => (
                      <tr className={cx('body')} onClick={() => navigateToDetailOrder(order._id)} key={order._id}>
                        <td className={cx('column')}>
                          <span className={cx('productId')}>{order._id.slice(0, 9)}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('title')}>{order.customer}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('price')}>${order.total}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('payment')}>{order.method === 0 ? 'Cash' : 'Paid'}</span>
                        </td>
                        <td className={cx('column')}>
                          <span className={cx('edit')}>
                            <button className={cx('stage-btn')}>Next Stage</button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Admin;
