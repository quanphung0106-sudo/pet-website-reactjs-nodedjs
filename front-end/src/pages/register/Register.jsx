import React from 'react';
import { Box, InputAdornment, Typography } from '@mui/material';
import styles from './Register.module.scss';
import Grid from '@mui/material/Unstable_Grid2';

import RegisterImage from '~/assets/images/register-background.png';
import { BaseButton } from '~/components/Button/Button';
import { LineTextField } from '~/components/TextField/TextField';
import { Visibility } from '@mui/icons-material';

export default function Register() {
  return (
    <Box padding={{sm: 4}} className={styles.Register}>
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
            <form>
              <LineTextField
                label="Username"
                type="text"
                placeholder="Enter your username"
                helperText="Wrong username. Check again!"
                required
              />
              <LineTextField
                label="Email"
                type="email"
                placeholder="Enter your email"
                helperText="Wrong email. Check again!"
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
              <LineTextField
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                helperText="Something wrong! Check again!"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Visibility />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <BaseButton primary>Register</BaseButton>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
