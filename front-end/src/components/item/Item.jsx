import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Item = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const res = await axios.get('http://localhost:8801/api/items');
      setDatas(res.data);
    };
    getDatas();
  }, []);

  return datas.map((data) => (
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
  ));
};

export default Item;
