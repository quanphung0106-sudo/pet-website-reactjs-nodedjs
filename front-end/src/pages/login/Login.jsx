import React, { useState } from 'react';
import { Box, InputAdornment, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Visibility } from '@mui/icons-material';

import { loginStart, loginSuccess, loginFail } from '~/redux/userSlice';
import LoginImage from '~/assets/images/login.jpg';
import { BaseButton } from '~/components/Button/Button';
import { LineTextField } from '~/components/TextField/TextField';
import styles from './Login.module.scss';

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      dispatch(loginStart());
      const res = await axios.post('/auth/login', user);
      dispatch(loginSuccess(res.data));
      if (res.data.isAdmin === true) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      if (err.status !== 200) {
        dispatch(loginFail(err));
        setError(err.response.data);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Login}>
      <Grid container spacing={0} className={styles.Container}>
        <Grid className={styles.ImgContainer} xs={6}>
          <Grid className={styles.Overlay} xs={12} />
          <Grid className={styles.Texts} xs={12}>
            <Typography variant="h1">Welcome Back.</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis nostrum quod, perspiciatis
              voluptatem nobis ducimus modi officiis fuga consequuntur voluptas esse, debitis perferendis
              necessitatibus.
            </Typography>
            <Grid xs={12}>
              <Typography variant="body2">Don't you have an account?</Typography>
              <BaseButton to="/signup" ghost>
                Register
              </BaseButton>
            </Grid>
          </Grid>
          <img src={LoginImage} alt="login" />
        </Grid>
        <Grid className={styles.Form} xs={6}>
          <Grid className={styles.Texts} xs={12}>
            <Typography variant="h2">Login</Typography>
            <form>
              <LineTextField
                name="username"
                label="Username"
                type="text"
                placeholder="Enter your username"
                helperText={error}
                required
                onChange={handleChange}
                error={error}
              />
              <LineTextField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                helperText={error}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
                error={error}
                required
              />
              <BaseButton primary onClick={handleSubmit}>
                Sign in
              </BaseButton>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
