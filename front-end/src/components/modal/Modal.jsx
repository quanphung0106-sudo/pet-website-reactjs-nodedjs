import styles from './Modal.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '~/redux/cartSlice';

const Modal = ({ total, setShowModal, createOrder }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  // const cartQuantityOfProduct = useSelector((state) => {
  //   state.cart.products.map((product) => console.log(product.quantity));
  // });
  // const cartTotalOfProduct = useSelector((state) => state.products.totalItem);
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  // console.log(products);

  const handleClick = () => {
    const products = cartProducts.map((product) => ({
      _id: product._id,
      check: product.check,
      img: product.img,
      title: product.title,
      quantityItem: product.quantity,
      totalItem: product.totalItem,
    }));
    createOrder({
      products,
      total,
      customer,
      phoneNumber,
      address,
      method: 0,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CloseOutlinedIcon onClick={() => setShowModal(false)} fontSize="large" className={styles.icon} />
        <h1 className={styles.title}>
          You will pay <span className={styles.total}>${total}</span> after devivery.
        </h1>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Your name
          </label>
          <input
            onChange={(e) => setCustomer(e.target.value)}
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Quan Phung"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Phone number
          </label>
          <input
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="0935 123 456"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="">
            Address
          </label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            className={styles.input}
            rows={2}
            placeholder="50 Nguyen Xuan Huu, Da Nang"
          />
        </div>

        <button onClick={handleClick} className={styles.button}>
          ORDER NOW!
        </button>
      </div>
    </div>
  );
};

export default Modal;
