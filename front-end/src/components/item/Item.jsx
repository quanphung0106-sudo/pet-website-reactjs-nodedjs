import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Item = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const res = await axios.get('http://localhost:8800/api/items');
      setDatas(res.data);
    };
    getDatas();
  }, []);

  console.log(datas);

  return datas.map((data) => (
    <div className={styles.container} key={data._id}>
      <div className={styles.top}>
        <Link to="/products/:productId">
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.img} alt="" />
          </div>
        </Link>
        {data.sellItem !== 0 ? <div className={styles.sale}>Sale</div> : ''}
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{data.title}</h3>

        <div className={styles.prices}>
          {data.sellItem !== 0 ? <del className={styles.price}>${data.sellItem}</del> : ''} $
          {data.typeOfOtions[0].price} - ${data.typeOfOtions[1].price}
        </div>

        <Link to="/products/:productId">
          <button className={styles.button}>View options</button>
        </Link>
      </div>
    </div>
  ));
};

export default Item;
