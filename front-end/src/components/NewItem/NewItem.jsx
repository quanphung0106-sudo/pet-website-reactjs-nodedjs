import React from 'react';
import { useState } from 'react';
import { Box, Typography, Dialog, IconButton, ListItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { BaseButton } from '~/components/Button/Button';
import { ContainedTextField } from '~/components/TextField/TextField';
import styles from './NewItem.module.scss';
import useAxiosPrivate from '~/hooks/useAxiosPrivate';
import { callApi } from '~/axios/axios';

const Modal = ({ open, setOpen, callback }) => {
  const [data, setData] = useState({
    title: '',
    desc: '',
    img: null,
    typeOfOptions: [],
  });
  const [extra, setExtra] = useState(null);
  const axiosPrivate = useAxiosPrivate();

  const handleDelete = (index) => () => {
    const options = data.typeOfOptions.filter((chips, chipsIndex) => {
      return chipsIndex !== index;
    });
    setData((prev) => {
      return {
        ...prev,
        typeOfOptions: [...options],
      };
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.name === 'img' ? e.target.files[0] : e.target.value }));
  };

  const handleChangeExtra = (e) => {
    setExtra((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleExtra = () => {
    setData((prev) => {
      return {
        ...prev,
        typeOfOptions: [...prev.typeOfOptions, extra],
      };
    });
  };

  const handleCreate = async () => {
    const myData = new FormData();
    myData.append('file', data.img);
    myData.append('upload_preset', 'pet-websites');

    try {
      const uploadRes = await callApi.post('https://api.cloudinary.com/v1_1/dw0r3ayk2/image/upload', myData, {
        'Access-Control-Allow-Credentials': true,
        withCredentials: false,
      });
      const res = await axiosPrivate.post('/items', {
        ...data,
        img: uploadRes.data.url,
      });
      setOpen(false);
      if (res.status === 201) callback();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
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
        Add new product.
      </DialogTitle>
      <DialogContent>
        <Grid container className={styles.ContentWrapper} rowGap={2}>
          <Grid container className={styles.Left} sm={12} lg={8}>
            <Grid sm={12} lg={6}>
              <ContainedTextField
                onChange={handleChange}
                label="Title"
                name="title"
                type="text"
                placeholder="Siberian Husky"
              />
              <ContainedTextField
                onChange={handleChange}
                label="Description"
                name="desc"
                type="text"
                placeholder="The Siberian Husky is a medium-sized ..."
              />
              <BaseButton primary size="large" component="label" endIcon={<CameraAltIcon />}>
                Upload
                <input hidden onChange={handleChange} label="Image" name="img" type="file" accept="image/*" />
              </BaseButton>
            </Grid>
            <Grid sm={12} lg={6}>
              <Box className={styles.ExtraPrice}>
                <ContainedTextField
                  onChange={handleChangeExtra}
                  label="Extra Title"
                  name="title"
                  type="text"
                  placeholder="White Coat"
                />
                <ContainedTextField
                  onChange={handleChangeExtra}
                  label="Price"
                  name="price"
                  type="number"
                  placeholder="50"
                />
              </Box>
              <BaseButton primary onClick={handleExtra} className={styles.Btn}>
                Add
              </BaseButton>
              <Box className={styles.ListExtras}>
                {data.typeOfOptions.map((data, index) => {
                  return (
                    <ListItem key={index}>
                      <Chip
                        classes={{ root: styles.Root }}
                        label={
                          <>
                            <Typography variant="span">${data.price}</Typography> {data.title}
                          </>
                        }
                        onDelete={handleDelete(index)}
                      />
                    </ListItem>
                  );
                })}
              </Box>
            </Grid>
            <BaseButton primary size="large" onClick={handleCreate}>
              Add product
            </BaseButton>
          </Grid>
          <Grid className={styles.Right} sm={12} lg={4}>
            <img src={data.img ? URL.createObjectURL(data.img) : '/img/pets.jpg'} alt="preview" />
            <Typography variant="h1">{data?.title}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
