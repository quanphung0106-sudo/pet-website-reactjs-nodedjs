import { Box, IconButton, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

import itemApi from '~/helpers/axios/itemApi';
import { BaseButton } from '~/components/Button/Button';
import Delete from '~/components/Delete/Delete';
import NewItem from '~/components/NewItem/NewItem';
import styles from './Admin.module.scss';
import Loading from '~/components/Loading/Loading';

const Products = ({ handleAlign }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const column = [
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

  const navigateToDetailItem = (id) => {
    navigate(`/products/${id}`);
  };

  const getAllItems = async () => {
    const res = await itemApi.getAll();
    setItems(res.data);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  if (!items) return <Loading />;
  return (
    <Box>
      <NewItem open={open} setOpen={setOpen} callback={getAllItems} />
      <Box className={styles.Products}>
        <BaseButton primary size="large" className={styles.Btn} onClick={handleClickOpen}>
          Add new Product
        </BaseButton>
        <TableContainer component={Paper} className={styles.Table}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead classes={{ root: styles.TableHead }}>
              <TableRow>
                {column.map((column, index) => {
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
              {items.map((item) => {
                return (
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
                      ${item.typeOfOptions[0].price}- {item.typeOfOptions[item.typeOfOptions.length - 1].price}
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()} classes={{ root: styles.TableCell }} align="center">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <Delete id={item._id} callback={getAllItems} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Products;
