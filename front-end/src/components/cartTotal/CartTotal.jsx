import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './CartTotal.module.css';
import Modal from '../modal/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartTotal = ({ typeOfButton, button }) => {
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const createOrder = async (data) => {
    const res = await axios.post('http://localhost:8801/api/orders', data);
    res.status === 201 && navigate(`/orders/${res.data._id}`);
  };

  // console.log(cart);
  return (
    <>
      <div className={styles.totalWrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Subtotal:</b>${amount}
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b>$0.00
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b>${amount}
        </div>
        {open ? (
          <div className={styles.payment}>
            <button className={styles.cash} onClick={() => setShowModal(true)}>
              CASH
            </button>
            <button className={styles.paypal}>Paypal</button>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className={typeOfButton}>
            {button}
          </button>
        )}
      </div>
      {showModal && <Modal total={cart.total} createOrder={createOrder} setShowModal={setShowModal} />}
    </>
  );
};

export default CartTotal;
