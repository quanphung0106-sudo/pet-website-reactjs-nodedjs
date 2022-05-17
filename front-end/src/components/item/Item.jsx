import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchedData } from '~/redux/cartSlice';

const Item = () => {
  const [datas, setDatas] = useState([]);

  const dispatch = useDispatch();
  const fetch = useSelector((state) => state.cart.isFetching);

  console.log(fetch);

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
        <div className={styles.textWrapper}>
          <h1>Đang tải tài nguyên, vui lòng chờ</h1>
          <div className={styles.loading}></div>
        </div>
      ) : (
        datas?.map((data) => (
          <div className={styles.container} key={data._id}>
            <div className={styles.top}>
              <Link to={`/products/${data._id}`}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={data.img} alt="" />
                </div>
              </Link>
              {data.sellItem !== 0 ? <div className={styles.sale}>Sale</div> : ''}
            </div>
            <div className={styles.bottom}>
              <h3 className={styles.title}>{data.title}</h3>

              <div className={styles.prices}>
                {data.sellItem !== 0 ? (
                  <>
                    <del className={styles.price}>
                      ${data.typeOfOptions[0].price} - {data.typeOfOptions[1].price}
                    </del>
                    ${data.typeOfOptions[0].price - (data.typeOfOptions[0].price * data.sellItem) / 100}-
                    {data.typeOfOptions[1].price - (data.typeOfOptions[1].price * data.sellItem) / 100}
                  </>
                ) : (
                  `$${data.typeOfOptions[0].price} - ${data.typeOfOptions[1].price}`
                )}
              </div>
              <Link to={`/products/${data._id}`}>
                <button className={styles.button}>View options</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Item;
