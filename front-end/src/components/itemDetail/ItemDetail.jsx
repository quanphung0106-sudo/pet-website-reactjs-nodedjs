import styles from './ItemDetail.module.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addProduct } from '~/redux/cartSlice';
import { v4 as uuidv4 } from 'uuid';

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
      const res = await axios.get(`http://localhost:8801/api/items/${params.id}`);
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
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={datas.img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.texts}>
          <h1 className={styles.title}>{datas.title}</h1>
          <div className={styles.prices}>
            {datas.sellItem !== 0 ? (
              <>
                <div className={styles.sellNum}>-{datas.sellItem}%</div>
                {/* <del className={styles.price}>${price}</del>  */}${price}
              </>
            ) : (
              <>${price}</>
            )}
          </div>
          <p className={styles.desc}>{datas.desc}</p>
          <div className={styles.quantity}>
            <button onClick={() => handleQuantity('left')} className={styles.adjust}>
              -
            </button>
            <input type="number" onChange={handleOnchange} className={styles.number} value={quantity} />
            <button onClick={() => handleQuantity('right')} className={styles.adjust}>
              +
            </button>
            <p className={styles.text}>20 products are available</p>
          </div>
          <section className={styles.types}>
            {datas.typeOfOptions?.map((option) => (
              <div className={styles.extra} key={option._id}>
                <input
                  onChange={() => handleChecked(option)}
                  type="checkbox"
                  checked={check._id === option._id}
                  id={option._id}
                  className={styles.option}
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
