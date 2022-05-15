import React, { useRef, useState } from 'react';
import { Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

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
  };

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
