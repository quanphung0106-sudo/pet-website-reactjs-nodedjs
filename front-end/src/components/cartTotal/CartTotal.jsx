import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from './CartTotal.module.scss';
import Modal from '../modal/Modal';
import { Box, Typography } from '@mui/material';
import { BaseButton } from '../Button/Button';

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const createOrder = async (data) => {
    const res = await axios.post('https://pet-website-reactjs-nodejs.herokuapp.com/api/orders', data);
    res.status === 201 && navigate(`/orders/${res.data._id}`);
  };

  return (
    <>
      <Box className={styles.Container}>
        <Typography variant="h1">CART TOTAL</Typography>
        <Box className={styles.TotalWrapper}>
          <Typography variant="body1">Subtotal: ${amount}</Typography>
          <Typography variant="body1">Discount: $0.00</Typography>
          <Typography variant="body1">Total: ${amount}</Typography>
        </Box>
        {open ? (
          <Box className={styles.PaymentMethod}>
            <BaseButton ghost onClick={() => setShowModal(true)}>
              CASH
            </BaseButton>
            <BaseButton ghost>Paypal</BaseButton>
          </Box>
        ) : (
          <BaseButton ghost onClick={() => setOpen(true)} className={styles.CheckoutBtn}>
            CHECKOUT NOW!
          </BaseButton>
        )}
      </Box>
      {showModal && <Modal total={cart.total} createOrder={createOrder} setShowModal={setShowModal} />}
    </>
  );
};

export default CartTotal;
