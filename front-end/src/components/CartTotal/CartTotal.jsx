import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BaseButton } from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './CartTotal.module.scss';

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        {openPayment ? (
          <Box className={styles.PaymentMethod}>
            <BaseButton ghost onClick={handleClickOpen}>
              CASH
            </BaseButton>
            <BaseButton ghost>Paypal</BaseButton>
          </Box>
        ) : (
          <BaseButton ghost onClick={() => setOpenPayment(true)} className={styles.CheckoutBtn}>
            CHECKOUT NOW!
          </BaseButton>
        )}
      </Box>
      {open && <Modal total={cart.total} createOrder={createOrder} setOpen={setOpen} open={open} />}
    </>
  );
};

export default CartTotal;
