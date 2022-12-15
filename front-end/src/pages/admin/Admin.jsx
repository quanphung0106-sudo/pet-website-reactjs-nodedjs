import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from '../error/Error';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { formatDate } from '~/components/FormatDate/FormatDate';
import { BaseButton } from '~/components/Button/Button';

import styles from './Admin.module.scss';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

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

  const columnItems = [
    {
      name: 'Product',
    },
    {
      name: 'Product ID',
      align: 'center',
    },
    {
      name: 'Name',
      align: 'center',
    },
    {
      name: 'Price',
      align: 'center',
    },
    {
      name: 'Action',
      align: 'center',
    },
  ];

  const columnOrders = [
    {
      name: 'Order Id',
    },
    {
      name: 'Customer',
      align: 'center',
    },
    {
      name: 'Total',
      align: 'right',
    },
    {
      name: 'Payment',
      align: 'center',
    },
    {
      name: 'Action',
      align: 'center',
    },
  ];

  const handleAlign = (index, align) => {
    if (index === 0) return 'left';
    return align;
  };

  return (
    <>
      {isAdmin ? (
        <>
          <Header />
          <Grid container className={styles.Container}>
            <Grid className={styles.Left} lg={6} sx={{ paddingRight: 2 }}>
              <Box className={styles.Products}>
                <Typography variant="h1">Products</Typography>
                <BaseButton primary size="large">
                  Add new Product
                </BaseButton>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead classes={{ root: styles.TableHead }}>
                    <TableRow>
                      {columnItems.map((column, index) => {
                        return (
                          <TableCell
                            classes={{ root: styles.TableCell }}
                            align={handleAlign(index, column.align)}
                            key={index}
                          >
                            {column.name}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody classes={{ root: styles.TableBody }}>
                    {items.map((item) => (
                      <TableRow
                        onClick={() => navigateToDetailItem(item._id)}
                        key={item._id}
                        classes={{ root: styles.TableRow }}
                        sx={{
                          '&:last-child td, &:last-child th': {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell classes={{ root: styles.TableCell }} align="left">
                          <img src={item.img} alt="" />
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          {item._id.slice(0, 9)}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          {item.title}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          ${item.typeOfOptions[0].price}- {item.typeOfOptions[1].price}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          <BaseButton primary size="small">
                            Edit
                          </BaseButton>
                          <BaseButton primary size="small">
                            Delete
                          </BaseButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid className={styles.Right} lg={6} sx={{ paddingLeft: 2 }}>
              <Box className={styles.Products}>
                <Typography variant="h1">Orders</Typography>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead classes={{ root: styles.TableHead }}>
                    <TableRow>
                      {columnOrders.map((column, index) => {
                        return (
                          <TableCell
                            classes={{ root: styles.TableCell }}
                            align={handleAlign(index, column.align)}
                            key={index}
                          >
                            {column.name}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody classes={{ root: styles.TableBody }}>
                    {orders.map((order) => (
                      <TableRow
                        onClick={() => navigateToDetailOrder(order._id)}
                        key={order._id}
                        classes={{ root: styles.TableRow }}
                        sx={{
                          '&:last-child td, &:last-child th': {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell classes={{ root: styles.TableCell }} align="left">
                          {order._id.slice(0, 9)}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          {order.customer}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          ${order.total}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          {order.method === 0 ? 'Cash' : 'Paid'}
                        </TableCell>
                        <TableCell classes={{ root: styles.TableCell }} align="center">
                          <BaseButton primary size="small">
                            Edit
                          </BaseButton>
                          <BaseButton primary size="small">
                            Delete
                          </BaseButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Footer />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Admin;
