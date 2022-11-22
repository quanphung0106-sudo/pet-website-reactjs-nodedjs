import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './Table.module.scss';

export default function BaseTable({ columns, dataSource }) {
  
  
  console.log({
    columns,
    // dataSource,
  });

  // const Columns = () => {
  //   columns.map((column) => (
  //     <TableCell classes={{ root: styles.TableCell }} align={column.align} key={column.dataIndex}>
  //       {column.name}
  //     </TableCell>
  //   ));
  // };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead classes={{ root: styles.TableHead }}>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell classes={{ root: styles.TableCell }} align={column.align} key={column.dataIndex}>
                  {column.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: styles.TableBody }}>
          {/* {dataSource?.map((data, index) => ( */}
          <TableRow
            classes={{ root: styles.TableRow }}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            // key={index}
          >
            <TableCell classes={{ root: styles.TableCell }} align="left">
              {/* {dataSourceMapping(dataSource)} */}
            </TableCell>
            {/* 
              <TableCell classes={{ root: styles.TableCell }} align="left">
                <img src={data.img} alt="img" />
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="center">
                {data.title}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="center">
                {data.check.title}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                ${data.price}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                {data.quantity}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                ${data.price * data.quantity}
              </TableCell> */}
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
