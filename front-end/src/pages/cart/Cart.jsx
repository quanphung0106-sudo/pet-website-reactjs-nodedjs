import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseButton } from '~/components/Button/Button';
import Grid from '@mui/material/Unstable_Grid2';

import CartTotal from '~/components/CartTotal/CartTotal';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import { deleteItem } from '~/redux/cartSlice';
import styles from './Cart.module.scss';

const Cart = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      name: 'Product',
      align: 'left',
      key: 'idItem',
      dataIndex: 'img',
      render: ({ img }) => <img src={img} alt="img" />,
    },
    {
      name: 'Name',
      align: 'center',
      key: 'idItem',
      dataIndex: 'title',
    },
    {
      name: 'Type',
      align: 'center',
      key: 'idItem',
      dataIndex: 'check',
    },
    {
      name: 'Price',
      align: 'right',
      key: 'idItem',
      dataIndex: 'price',
    },
    {
      name: 'Quantity',
      align: 'right',
      key: 'idItem',
      dataIndex: 'quantity',
    },
    {
      name: 'Total',
      align: 'right',
      key: 'idItem',
      dataIndex: 'total',
    },
  ];
  return (
    // <BaseTable columns={columns} dataSource={items} />
    <>
      <Box className={styles.Container}>
        {items.length !== 0 ? (
          <>
            <Grid container className={styles.Wrapper} columnSpacing={{ lg: 6 }}>
              <Grid className={styles.Left} sm={12} lg={8}>
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
                          {/* <th className={styles.column}>Edit</th> */}
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
                            {/* <td className={styles.column}>
                          <button
                            onClick={() => handleDeleteItem(product.idItem, product.price, product.quantity)}
                            className={styles.deleteItem}
                          >
                            Delete
                          </button>
                        </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Grid>
              <Grid className={styles.Right} sm={12} lg={4}>
                <CartTotal />
              </Grid>
            </Grid>
          </>
        ) : (
          <Box flexDirection="column" className={styles.TextWrapper}>
            <h1>Bạn chưa chọn bất kỳ món hàng nào :(</h1>
            <BaseButton primary to="/products">
              Mua ngay!
            </BaseButton>
          </Box>
        )}
      </Box>
      <ScrollToTop />
    </>
  );
};

export default Cart;
