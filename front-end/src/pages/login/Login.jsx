import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFail } from '~/redux/userSlice';
// import GitHubIcon from "@mui/icons-material/GitHub";

const cx = classNames.bind(styles);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const isAdmin = user !== null && user.isAdmin;

  console.log(isAdmin);

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
    <div className={cx('container')}>
      <div className={cx('imgContainer')}>
        <img src="/img/background-signin-signup.jpg" className={cx('backgroundImg')} alt="" />
      </div>
      <form className={cx('formWrapper')} onSubmit={handleSubmit} action="">
        <h2 className={cx('title')}>Welcome back!</h2>
        <div className={cx('texts')}>
          <label htmlFor="username" className={cx('label')}>
            Username
          </label>
          <input ref={username} className={cx('input')} type="text" id="username" placeholder="Your name" />
        </div>
        <div className={cx('texts')}>
          <label htmlFor="password" className={cx('label')}>
            Password
          </label>
          <input ref={password} className={cx('input')} type="text" id="password" placeholder="Your password" />
        </div>
        <button className={cx('button')}>Đăng nhập</button>
      </form>
    </div>
  );
}
