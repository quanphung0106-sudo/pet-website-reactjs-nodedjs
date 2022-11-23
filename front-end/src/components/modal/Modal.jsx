import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

import { reset } from '~/redux/cartSlice';
import styles from './Modal.module.scss';
import { ContainedTextField } from '../TextField/TextField';
import { BaseButton } from '../Button/Button';

const Modal = ({ total, createOrder, setOpen, open }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  // const cartQuantityOfProduct = useSelector((state) => {
  //   state.cart.products.map((product) => console.log(product.quantity));
  // });
  // const cartTotalOfProduct = useSelector((state) => state.products.totalItem);
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        You will pay <Box component="b">${total}</Box> after delivery.
      </DialogTitle>
      <DialogContent>
        <Box className={styles.ContentWrapper}>
          <ContainedTextField
            label="Name"
            name="Name"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setCustomer(e.target.value)}
          >
            Hello
          </ContainedTextField>
          <ContainedTextField
            label="Phone Number"
            name="Phone Number"
            type="number"
            placeholder="0935 5xx xxx"
            onChange={(e) => setPhoneNumber(e.target.value)}
          >
            Hello
          </ContainedTextField>
          <ContainedTextField
            label="Address"
            name="Address"
            type="text"
            placeholder="johndoe176@gmail.com"
            onChange={(e) => setAddress(e.target.value)}
          >
            Hello
          </ContainedTextField>
          <BaseButton primary onClick={handleClick}>
            ORDER NOW!
          </BaseButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
