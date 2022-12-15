import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '~/redux/cartSlice';
import styles from './Item.module.scss';
import { Box, Typography } from '@mui/material';
import { BaseButton } from '../Button/Button';
import Loading from '../Loading/Loading';
import useAxiosPrivate from '~/hooks/useAxiosPrivate';

const Item = () => {
  const [data, setData] = useState([]);
  const fetch = useSelector((state) => state.cart.isFetching);
  const user = useSelector((state) => state.user.user);
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();


  useEffect(() => {
    const getData = async () => {
      console.log('user.accessToken: ', user.accessToken);
      const res = await axiosPrivate.get(`${process.env.REACT_APP_SERVER}/items`, {
        headers: { Authorization: user.accessToken },
      });
      if (res.data) {
        setData(res.data);
      }
      dispatch(fetchData());
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {fetch === false ? (
        <Loading className={styles.Loading} />
      ) : (
        data?.map((data) => (
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
