import React, { useRef, useState } from 'react';
import { Box, Button, CardMedia, InputAdornment, Typography } from '@mui/material';
import styles from './Login.module.scss';
import Grid from '@mui/material/Unstable_Grid2';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFail } from '~/redux/userSlice';
// import GitHubIcon from "@mui/icons-material/GitHub";

import LoginImage from '~/assets/images/login1.jpg';
import { BaseButton } from '~/components/Button/Button';
import { ContainedTextField, LineTextField } from '~/components/TextField/TextField';
import { Visibility } from '@mui/icons-material';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const isAdmin = user !== null && user.isAdmin;

  const username = useRef();
  const password = useRef();
  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username: username.current.value,
      password: password.current.value,
    };

    dispatch(loginStart());
    try {
      const res = await axios.post('http://localhost:8808/api/auth/login', userInfo);
      dispatch(loginSuccess(res.data));
      if (res.data.isAdmin === true) {
        navigate('/admin');
      }
    } catch (err) {
      dispatch(loginFail(err));
      console.log(err);
      alert('Thông tin đăng nhập không chính xác');
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
              necessitatibus. Magni quod quae veritatis nostrum.
            </Typography>
            <Typography variant="body2">Don't you have an account?</Typography>
            <BaseButton to="/register" ghost>
              Register
            </BaseButton>
          </Grid>
          <img src={LoginImage} alt="login" />
        </Grid>
        <Grid className={styles.Form} xs={6}>
          <Grid className={styles.Texts} xs={12}>
            <Typography variant="h2">Login</Typography>
            <form>
              <LineTextField
                label="Username"
                placeholder="Enter your username"
                helperText="Wrong username. Check again!"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <LineTextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText="Wrong password. Check again!"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <ContainedTextField
                label="Email"
                type="email"
                required
                placeholder="Enter your password"
                helperText="Wrong password. Check again!"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
              />
              <BaseButton primary>Sign in</BaseButton>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <div className={cx('container')}>
    //   <div className={cx('imgContainer')}>
    //     <img src="/img/background-signin-signup.jpg" className={cx('backgroundImg')} alt="" />
    //   </div>
    //   <form className={cx('formWrapper')} onSubmit={handleSubmit} action="">
    //     <h2 className={cx('title')}>Welcome back!</h2>
    //     <div className={cx('texts')}>
    //       <label htmlFor="username" className={cx('label')}>
    //         Username
    //       </label>
    //       <input ref={username} className={cx('input')} type="text" id="username" placeholder="Your name" />
    //     </div>
    //     <div className={cx('texts')}>
    //       <label htmlFor="password" className={cx('label')}>
    //         Password
    //       </label>
    //       <input ref={password} className={cx('input')} type="text" id="password" placeholder="Your password" />
    //     </div>
    //     <button className={cx('button')}>Đăng nhập</button>
    //   </form>
    // </div>
  );
}
