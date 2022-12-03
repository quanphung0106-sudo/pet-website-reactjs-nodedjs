import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility } from '@mui/icons-material';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import RegisterImage from '~/assets/images/register-background.png';
import { BaseButton } from '~/components/Button/Button';
import { LineTextField } from '~/components/TextField/TextField';
import styles from './Register.module.scss';

const messages = {
  email: 'Invalid email format',
  notMatchPassword: "Retype password doesn't match",
  requiredField: (value) => `${value} is required`,
  maxLength: (field, value) => `${field} max length is ${value}`,
  minLength: (field, value) => `${field} min length is ${value}`,
};

export default function Register() {
  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
    resolver: yupResolver(
      Yup.object({
        fullName: Yup.string()
          .min(5, messages.minLength('Full name', 5))
          .max(255, messages.maxLength('Full name', 50))
          .required(messages.requiredField('Full name')),
        email: Yup.string()
          .email(messages.email)
          .min(5, messages.minLength('Email', 5))
          .max(255, messages.maxLength('Email', 50))
          .required(messages.requiredField('Email')),
        password: Yup.string().required(messages.requiredField('Password')),
        confirmPassword: Yup.string()
          .when('password', {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], messages.notMatchPassword),
          })
          .required(messages.requiredField('Confirm password')),
      }),
    ),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box padding={{ sm: 4 }} className={styles.Register}>
      <Grid container className={styles.Container} lg={12}>
        <Grid container className={styles.ImgContainer} sm={6} lg={6}>
          <Grid className={styles.Texts}>
            <Typography variant="h1">Welcome, My Friend!</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis nostrum quod, perspiciatis
              voluptatem nobis ducimus modi officiis fuga consequuntur voluptas esse, debitis perferendis
              necessitatibus.
            </Typography>
            <Box className={styles.Account}>
              <Typography variant="body2">Do you already have an account?</Typography>
              <BaseButton to="/signin" ghost>
                Sign in
              </BaseButton>
            </Box>
          </Grid>
          <img src={RegisterImage} alt="register" />
        </Grid>
        <Grid className={styles.Form} sm={6} lg={6}>
          <Box className={styles.Texts}>
            <Typography variant="h2">Register</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(handleFormSubmit)}
              data-testid="logup-form"
            >
              <LineTextField
                label="Username"
                type="text"
                spellCheck="false"
                data-testid="account-username"
                placeholder="Enter your username"
                {...register('fullName')}
                InputLabelProps={{ shrink: true }}
                helperText={formState.errors.fullName?.message}
                error={!!formState.errors.fullName}
              />
              <LineTextField
                label="Email"
                type="email"
                spellCheck="false"
                InputLabelProps={{ shrink: true }}
                placeholder="Enter your email"
                {...register('email')}
                helperText={formState.errors.email?.message}
                error={!!formState.errors.email}
              />
              <LineTextField
                label="Password"
                type="password"
                spellCheck="false"
                InputLabelProps={{ shrink: true }}
                placeholder="Enter your password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                {...register('password')}
                helperText={formState.errors.password?.message}
                error={!!formState.errors.password}
              />
              <LineTextField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                spellCheck="false"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                {...register('confirmPassword')}
                helperText={formState.errors.confirmPassword?.message}
                error={!!formState.errors.confirmPassword}
              />
              <BaseButton primary data-testid="button" type="submit">
                Register
              </BaseButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
