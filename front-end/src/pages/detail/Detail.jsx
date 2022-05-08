import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import styles from './Detail.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);
  const [types, setTypes] = useState([]);

  const checkboxes = [
    {
      id: 1,
      type: 'White Coat',
    },
    {
      id: 2,
      type: 'Yellow Coat',
    },
    {
      id: 3,
      type: 'Black Coat',
    },
    {
      id: 4,
      type: 'Gray Coat',
    },
    {
      id: 5,
      type: 'RGB Coat',
    },
  ];

  console.log(types);

  const handleCheck = (e, checkbox) => {
    let checked = e.target.checked;
    if (checked) {
      setTypes([checkbox]);
      [checkbox].filter((item) => {
        //remove all checkboxes except the currently selected checkbox
        if (item.id === checkbox.id) {
        }
        console.log(checked, item.id, checkbox.id);
      });
    } else {
      setTypes(types.filter((type) => type.id !== checkbox.id));
    }
  };

  const handleOnchange = (e) => {
    if (e.target.value <= 20) {
      setQuantity(parseInt(e.target.value));
    }
  };

  const handleQuantity = (count) => {
    if (quantity >= 2 && count === 'left') {
      setQuantity(quantity - 1);
    } else if (quantity < 20 && count === 'right') {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src="/img/pets.jpg" alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.texts}>
              <h1 className={styles.title}>Adorable Dog</h1>
              <div className={styles.prices}>
                <del className={styles.price}>$25.00</del> $15.00
              </div>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi
                consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
                laborum vero?
              </p>
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
                {checkboxes.map((checkbox) => (
                  <div className={styles.extra} key={checkbox.id}>
                    <input
                      onClick={(e) => handleCheck(e, checkbox)}
                      type="checkbox"
                      id={checkbox.id}
                      className={styles.option}
                    ></input>
                    <label htmlFor={checkbox.id}>{checkbox.type}</label>
                  </div>
                ))}
              </section>
              <div className={styles.payment}>
                <button className={styles.button}>
                  <ShoppingCartIcon />
                  <p className={styles.p}>Add to cart</p>
                </button>
                <button className={styles.button}>
                  <p className={styles.p}>Buy now!</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
