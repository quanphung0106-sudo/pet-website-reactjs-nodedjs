import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, InputAdornment, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { ContainedTextField } from '~/components/TextField/TextField';
import styles from './SearchOrder.module.scss';

const SearchOrder = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [id, setId] = useState('');
  // const [localStorageItems, setLocalStorageItems] = useState({});

  // useEffect(() => {
  //   const getItem = JSON.parse(localStorage.getItem('item'));
  //   if (getItem) setLocalStorageItems(getItem);
  // }, []);

  // console.log(localStorageItems);

  const getItemById = async () => {
    try {
      const res = await axios.get(`https://pet-website-reactjs-nodejs.herokuapp.com/api/orders/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const navigateToDetailItem = () => {
    navigate(`/orders/${id}`);
  };

  return (
    <Box className={styles.Container}>
      <Box className={styles.ContentWrapper}>
        <ContainedTextField
          placeholder="637cb4xxxxxxxx"
          onChange={(e) => setId(e.target.value)}
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlinedIcon onClick={getItemById} />
              </InputAdornment>
            ),
          }}
        />
        {Object.keys(data).length !== 0 ? (
          <>
            <div className={styles.tableWrapper}>
              <div className={styles.tableHead}>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.head}>
                      <th className={styles.column}>Order ID</th>
                      <th className={styles.column}>Customer</th>
                      <th className={styles.column}>Address</th>
                      <th className={styles.column}>Total</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={styles.tableBody}>
                <table className={styles.table}>
                  <tbody className={styles.tbody}>
                    <tr onClick={navigateToDetailItem} className={styles.body}>
                      <td className={styles.column}>
                        <span className={styles.orderId}>{data._id}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.customer}>{data.customer}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.address}>{data.address}</span>
                      </td>
                      <td className={styles.column}>
                        <span className={styles.total}>
                          {Object.keys(data).length === 0 ? '' : '$'}
                          {data.total}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <Typography variant="h4">*Enter your Order Code to track the order</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchOrder;
