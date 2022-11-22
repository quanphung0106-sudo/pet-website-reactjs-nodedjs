import { useEffect, useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';

import { reset } from '~/redux/cartSlice';
import { BaseButton } from '~/components/Button/Button';
import Paid from '~/assets/images/paid.png';
import Bake from '~/assets/images/bake.png';
import Bike from '~/assets/images/bike.png';
import Delivered from '~/assets/images/delivered.png';
import Checked from '~/assets/images/checked.png';
import styles from './Order.module.scss';

const Orders = () => {
  const [data, setData] = useState({});

  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const status = data.status;

  const navigate = useNavigate();

  useEffect(() => {
    const getItemById = async () => {
      const res = await axios.get(`https://pet-website-reactjs-nodejs.herokuapp.com/api/orders/${params.id}`);
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

  const handleclick = () => {
    if (user) {
      navigate('/my-items');
    } else {
      navigate('/stranger-items');
    }
  };

  return (
    <Box className={styles.Container}>
      <Grid container className={styles.Wrapper} columnSpacing={{ lg: 6 }}>
        <Grid className={styles.Left} sm={12} lg={8}>
          <Box className={styles.ButtonWrapper}>
            <BaseButton startIcon={<ArrowBackOutlinedIcon />} primary onClick={handleclick}>
              Back to order list
            </BaseButton>
            <Typography variant="body1">
              *Warning: You should save the Order ID on the right side to check the order information.
            </Typography>
          </Box>
          <Grid container className={styles.DeliveryState}>
            <Grid className={statusClass(0)} lg={3}>
              <img src={Paid} alt="Paid" />
              <Box component="span">Payment</Box>
              <img className={styles.checkedIcon} src={Checked} alt="CheckedImg" />
            </Grid>
            <Grid className={statusClass(1)} lg={3}>
              <img src={Bake} alt="Bake" />
              <Box component="span">Preparing</Box>
              <img className={styles.checkedIcon} src={Checked} alt="CheckedImg" />
            </Grid>
            <Grid className={statusClass(2)} lg={3}>
              <img src={Bike} alt="Bike" />
              <Box component="span">On the way</Box>
              <img className={styles.checkedIcon} src={Checked} alt="CheckedImg" />
            </Grid>
            <Grid className={statusClass(3)} lg={3}>
              <img src={Delivered} alt="Delivered" />
              <Box component="span">Delivered</Box>
              <img className={styles.checkedIcon} src={Checked} alt="CheckedImg" />
            </Grid>
          </Grid>

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
                          <img src={item.img} alt="" />
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
        </Grid>
        <Grid className={styles.Right} sm={12} lg={4}>
          <Box className={styles.TotalWrapper}>
            <Typography variant="h1">Order Information</Typography>
            <Typography variant="body1">OrderID: {data._id}</Typography>
            <Typography variant="body1">Customer: {data.customer}</Typography>
            <Typography variant="body1">Address: {data.address}</Typography>
            <Typography variant="body1">Total: ${data.total}</Typography>
            <BaseButton disabled ghost>PAID!</BaseButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Orders;
