import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LoginImage from '~/assets/images/login-background.png';
import { BaseButton } from '~/components/Button/Button';
import { loginFail, loginStart, loginSuccess } from '~/redux/userSlice';
import styles from './Login.module.scss';

const messages = {
  email: 'Invalid email format',
  notMatchPassword: "Retype password doesn't match",
  requiredField: (value) => `${value} is required`,
  maxLength: (field, value) => `${field} max length is ${value}`,
  minLength: (field, value) => `${field} min length is ${value}`,
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(
      Yup.object({
        username: Yup.string()
          .min(5, messages.minLength('Username', 5))
          .max(255, messages.maxLength('Username', 50))
          .required(messages.requiredField('Username')),
        password: Yup.string().required(messages.requiredField('Password')),
      }),
    ),
  });

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      dispatch(loginStart());
      const res = await axios.post('https://pet-website-reactjs-nodejs.herokuapp.com/api/auth/login', values);
      dispatch(loginSuccess(res.data));
      if (res.data.isAdmin === true) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError(err?.response?.data);
      if (err.status !== 200) {
        dispatch(loginFail(err));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('hello bgnk');
  }, []);

  return (
    <Box padding={{ sm: 4 }} className={styles.Login}>
      <Grid container className={styles.Container} lg={12}>
        <Grid container className={styles.ImgContainer} sm={6} lg={6}>
          <Grid className={styles.Texts}>
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
        <Grid className={styles.Form} sm={6} lg={6}>
          <Grid className={styles.Texts}>
            <Typography variant="h2">Login</Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={handleSubmit(handleFormSubmit)}
              data-testid="login-form"
              sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
              <TextField
                label="Username"
                type="text"
                placeholder="Enter your username"
                spellCheck="false"
                variant="standard"
                {...register('username')}
                InputLabelProps={{ shrink: true }}
                helperText={formState.errors.username?.message}
                error={!!formState.errors.username}
                InputProps={{
                  inputProps: { 'data-testid': 'account-username', maxLength: 50 },
                }}
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                data-testid="account-password"
                spellCheck="false"
                variant="standard"
                {...register('password')}
                InputLabelProps={{ shrink: true }}
                helperText={formState.errors.password?.message}
                error={!!formState.errors.password}
              />
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                disableElevation
                data-testid="login-button"
                sx={{
                  width: 'fit-content',
                  height: '50px',
                  bgcolor: '#ea666c',
                  fontWeight: '800!important',
                  '&:hover': {
                    bgcolor: '#fff',
                    color: '#ea666c',
                    boxShadow:
                      '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 10%)',
                  },
                  gap: '10px',
                }}
              >
                {loading && <CircularProgress size={20} sx={{ color: '#ea666c' }} />}
                Sign in
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
