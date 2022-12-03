import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BaseButton } from '~/components/Button/Button';

import CartTotal from '~/components/CartTotal/CartTotal';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import BaseTable from '~/components/Table/Table';
import styles from './Cart.module.scss';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const columns = [
    {
      name: 'Product',
      align: 'left',
      render: ({ img }) => <img src={img} alt="img" />,
    },
    {
      name: 'Name',
      align: 'center',
      render: ({ title }) => <p>{title}</p>,
    },
    {
      name: 'Type',
      align: 'center',
      render: ({ type }) =><p>{type}</p>,
    },
    {
      name: 'Price',
      align: 'right',
      render: ({ price }) => <p>${price}</p>,
    },
    {
      name: 'Quantity',
      align: 'right',
      render: ({ quantity }) => <p>{quantity}</p>,
    },
    {
      name: 'Total',
      align: 'right',
      render: ({ total }) => <p>${total}</p>,
    },
  ];

  return (
    <>
      <Box className={styles.Container}>
        {items.length !== 0 ? (
          <>
            <Grid container className={styles.Wrapper} columnSpacing={{ lg: 6 }}>
              <Grid className={styles.Left} sm={12} lg={8}>
                <BaseTable columns={columns} dataSource={items} />
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
