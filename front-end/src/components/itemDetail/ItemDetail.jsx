import styles from './ItemDetail.module.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [check, setCheck] = useState({});
  const [datas, setDatas] = useState({});
  const [price, setPrice] = useState(0);
  const [sell, setSell] = useState(0);

  // Cách 1: Get ID from URL
  const params = useParams();

  //Cách 2:
  // var url = window.location.pathname;
  // var id = url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    const getItemById = async () => {
      const res = await axios.get(`http://localhost:8800/api/items/${params.id}`);
      // res && Object.keys(res).length === 0 && Object.getPrototypeOf(res) === Object.prototype;
      if (Object.keys(res).length === 0 && res.constructor === Object) {
        console.log('false');
      } else {
        setDatas(res.data);
      }
    };
    getItemById();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnchange = (e) => {
    if (e.target.value <= 20) {
      if (e.target.value !== isNaN()) {
        setQuantity(parseInt(e.target.value));
      }
    }
  };

  const handleQuantity = (count) => {
    if (quantity >= 2 && count === 'left') {
      setQuantity(quantity - 1);
    } else if (quantity < 20 && count === 'right') {
      setQuantity(quantity + 1);
    }
  };

  const handleChecked = (option) => {
    const sellPrice = option.price - (option.price * datas.sellItem) / 100;
    setCheck(option);
    setSell(sellPrice);
    setPrice(option.price);
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
                <del className={styles.price}>${price}</del> ${sell}
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
            <Link to="/cart">
              <button className={styles.addToCartButton}>
                <ShoppingCartIcon />
                <p className={styles.p}>Add to cart</p>
              </button>
            </Link>
            <Link to="/cart">
              <button className={styles.button}>
                <p className={styles.p}>Buy now!</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
