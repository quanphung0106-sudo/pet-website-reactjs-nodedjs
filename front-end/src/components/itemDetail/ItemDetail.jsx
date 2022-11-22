import styles from './ItemDetail.module.scss';
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';

import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addProduct } from '~/redux/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [check, setCheck] = useState({});
  const [datas, setDatas] = useState({});
  const [price, setPrice] = useState(0);
  const [sell, setSell] = useState(0);
  const [blockAdd, setBlockAdd] = useState(true);

  const dispatch = useDispatch();

  // Cách 1: Get ID from URL
  const params = useParams();

  //Cách 2:
  // var url = window.location.pathname;
  // var id = url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    const getItemById = async () => {
      const res = await axios.get(`https://pet-website-reactjs-nodejs.herokuapp.com/api/items/${params.id}`);
      setDatas(res.data);
    };
    getItemById();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnchange = (e) => {
    let data = e.target.value;
    let toNum = +data;
    if (toNum <= 20) {
      setQuantity(toNum);
    }
  };

  const handleQuantity = (count) => {
    if (quantity >= 2 && count === 'left') {
      let number = quantity - 1;
      setQuantity(number);
    } else if (quantity < 20 && count === 'right') {
      let number = quantity + 1;
      setQuantity(number);
    }
  };

  const handleChecked = (option) => {
    setCheck(option);
    setBlockAdd(false);

    if (datas.sellItem !== 0) {
      const sellPrice = option.price - (option.price * datas.sellItem) / 100;
      setSell(sellPrice);
      setPrice(sellPrice);
    } else {
      setPrice(option.price);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({
        idItem: uuidv4(),
        ...datas,
        price,
        quantity,
        check,
        totalItem: quantity * price,
      }),
    );
  };

  return (
    <Grid container className={styles.Container} lg={12}>
      <Grid className={styles.Left} lg={6}>
        <Box component="img" src={datas.img} alt="detailItem" />
      </Grid>
      <Grid className={styles.Right} lg={6}>
        <Box className={styles.Texts}>
          <Typography variant="h1">{datas.title}</Typography>
          <Box className={styles.Prices}>
            {datas.sellItem !== 0 ? (
              <>
                <Typography variant="body1">-{datas.sellItem}%</Typography>${price}
                <del className={styles.Price}>${price}</del>
              </>
            ) : (
              <>${price}</>
            )}
          </Box>
          <Typography variant="body1">{datas.desc}</Typography>
          <Box className={styles.Quantity}>
            <button onClick={() => handleQuantity('left')} className={styles.AdjustQuantity}>
              -
            </button>
            <input type="number" onChange={handleOnchange} className={styles.Numbers} value={quantity} />
            <button onClick={() => handleQuantity('right')} className={styles.AdjustQuantity}>
              +
            </button>
            <Typography variant="body1">20 products are available</Typography>
          </Box>
          <section className={styles.Types}>
            {datas.typeOfOptions?.map((option) => (
              <div className={styles.Extras} key={option._id}>
                <input
                  onChange={() => handleChecked(option)}
                  type="checkbox"
                  checked={check._id === option._id}
                  id={option._id}
                  className={styles.Options}
                ></input>
                <label htmlFor={option._id}>{option.title}</label>
              </div>
            ))}
          </section>
          <div className={styles.payment}>
            <button disabled={blockAdd} onClick={handleClick} className={styles.addToCartButton}>
              <ShoppingCartIcon />
              <p className={styles.p}>Add to cart</p>
            </button>
            <button className={styles.button} disabled={blockAdd}>
              <p className={styles.p}>Buy now!</p>
            </button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
