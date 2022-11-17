import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, fetchedData } from '~/redux/cartSlice';
import styles from './Item.module.scss';
import { Box, CircularProgress, Typography } from '@mui/material';
import { BaseButton } from '../Button/Button';

const Item = () => {
  const [datas, setDatas] = useState([]);

  const dispatch = useDispatch();
  const fetch = useSelector((state) => state.cart.isFetching);

  useEffect(() => {
    const getDatas = async () => {
      const res = await axios.get('https://pet-website-reactjs-nodejs.herokuapp.com/api/items');
      if (res.data) {
        setDatas(res.data);
      }
      dispatch(fetchData());
    };
    getDatas();
  }, []);

  return (
    <>
      {fetch === false ? (
        <Box className={styles.Loading}>
          <Typography variant="h1">Đang tải tài nguyên, vui lòng chờ</Typography>
          <CircularProgress classes={{ root: styles.LoadingIcon }} />
        </Box>
      ) : (
        datas?.map((data) => (
          <Grid container className={styles.Container} key={data._id} sm={4} md={3} lg={3}>
            <Grid className={styles.Top} lg={12}>
              <Link to={`/products/${data._id}`}>
                <Box component="img" src={data.img} alt="items" />
              </Link>
              {data.sellItem !== 0 ? (
                <Typography variant="body1" className={styles.Sale}>
                  Sale
                </Typography>
              ) : (
                ''
              )}
            </Grid>
            <Grid className={styles.Bottom} lg={12}>
              <Typography variant="h2">{data.title}</Typography>

              <Typography variant="body1">
                {data.sellItem !== 0 ? (
                  <>
                    <del variant="body2" className={styles.Price}>
                      ${data.typeOfOptions[0].price} - {data.typeOfOptions[1].price}
                    </del>
                    ${data.typeOfOptions[0].price - (data.typeOfOptions[0].price * data.sellItem) / 100}-
                    {data.typeOfOptions[1].price - (data.typeOfOptions[1].price * data.sellItem) / 100}
                  </>
                ) : (
                  `$${data.typeOfOptions[0].price} - ${data.typeOfOptions[1].price}`
                )}
              </Typography>
              <BaseButton to={`/products/${data._id}`} ghost>
                View Options
              </BaseButton>
            </Grid>
          </Grid>
        ))
      )}
    </>
  );
};

export default Item;
