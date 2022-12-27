import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

import { BaseButton } from '~/components/Button/Button';
import Delete from '~/components/Delete/Delete';
import { formatDate } from '~/components/FormatDate/FormatDate';
import Loading from '~/components/Loading/Loading';
import userApi from '~/helpers/axios/userApi';
import styles from './Admin.module.scss';

const Users = ({ handleAlign }) => {
  const [user, setUser] = useState([]);

  const column = [
    {
      name: 'ID',
    },
    {
      name: 'Username',
      align: 'center',
    },
    {
      name: 'Email',
      align: 'center',
    },
    {
      name: 'Created At',
      align: 'center',
    },
    {
      name: 'Role',
      align: 'center',
    },
    {
      name: 'Action',
      align: 'center',
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const res = await userApi.getAll();
      if (res.data) setUser(res.data);
    };
    getData();
  }, []);


  if (user.length === 0) return <Loading />;
  return (
    <Box>
      <Box className={styles.Users}>
        <BaseButton primary size="large" className={styles.Btn}>
          Add new User
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
              {user?.map((data, index) => {
                return (
                  <TableRow
                    key={data._id}
                    classes={{ root: styles.TableRow }}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell classes={{ root: styles.TableCell }} align="left">
                      {++index}
                    </TableCell>
                    <TableCell classes={{ root: styles.TableCell }} align="center">
                      {data.username}
                    </TableCell>
                    <TableCell classes={{ root: styles.TableCell }} align="center">
                      {data.email}
                    </TableCell>
                    <TableCell classes={{ root: styles.TableCell }} align="center">
                      {formatDate(data.createdAt)}
                    </TableCell>
                    <TableCell classes={{ root: styles.TableCell }} align="center">
                      {data.isAdmin === true ? 'Admin' : 'User'}
                    </TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()} classes={{ root: styles.TableCell }} align="center">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <Delete id={data._id} />
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

export default Users;
