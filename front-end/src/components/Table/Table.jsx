import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './Table.module.scss';

export default function BaseTable(props) {
  const { columns, dataSource } = props;
  const [newFunc, setNewFunc] = useState([]);
  useEffect(() => {
    const newArray = dataSource.map((data, index) => ({
      ...data,
      renderImage: function () {
        return columns[0].render({ img: data.img });
      },
      renderTitle: function () {
        return columns[1].render({ title: data.title });
      },
      renderType: function () {
        return columns[2].render({ type: data.check.title });
      },
      renderPrice: function () {
        return columns[3].render({ price: data.price || data.check.price });
      },
      renderQuantity: function () {
        return columns[4].render({ quantity: data.quantity });
      },
      renderTotal: function () {
        return columns[5].render({ total: data.quantity * data.price || data.total });
      },
    }));
    setNewFunc(newArray);
  }, [columns, dataSource]);

  const handleAlign = (array, index, align) => {
    if (index === 0) return 'left';
    if (index === array.length - 1) return 'right';
    return align;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead classes={{ root: styles.TableHead }}>
          <TableRow>
            {columns.map((column, index) => {
              return (
                <TableCell
                  classes={{ root: styles.TableCell }}
                  align={handleAlign(columns, index, column.align)}
                  key={column.dataIndex}
                >
                  {column.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: styles.TableBody }}>
          {newFunc?.map((data, index) => (
            <TableRow
              classes={{ root: styles.TableRow }}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
              key={index}
            >
              <TableCell classes={{ root: styles.TableCell }} align="left">
                {data.renderImage()}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="center">
                {data.renderTitle()}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="center">
                {data.renderType()}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                {data.renderPrice()}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                {data.renderQuantity()}
              </TableCell>
              <TableCell classes={{ root: styles.TableCell }} align="right">
                {data.renderTotal()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
