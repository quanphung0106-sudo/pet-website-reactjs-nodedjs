import React from 'react';
import { Box, InputAdornment, Typography } from '@mui/material';
import styles from './Register.module.scss';
import Grid from '@mui/material/Unstable_Grid2';

import RegisterImage from '~/assets/images/register.jpg';
import { BaseButton } from '~/components/Button/Button';
import { LineTextField } from '~/components/TextField/TextField';
import { Visibility } from '@mui/icons-material';

export default function Register() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Register}>
      <Grid container spacing={0} className={styles.Container}>
        <Grid className={styles.ImgContainer} xs={6}>
          <Grid className={styles.Overlay} xs={12} />
          <Grid className={styles.Texts} xs={12}>
            <Typography variant="h1">Welcome, My Friend!</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis nostrum quod, perspiciatis
              voluptatem nobis ducimus modi officiis fuga consequuntur voluptas esse, debitis perferendis
              necessitatibus.
            </Typography>
            <Grid xs={12}>
            <Typography variant="body2">Do you already have an account?</Typography>
            <BaseButton to="/signin" ghost>
              Sign in
            </BaseButton>
            </Grid>
          </Grid>
          <img src={RegisterImage} alt="register" />
        </Grid>
        <Grid className={styles.Form} xs={6}>
          <Grid className={styles.Texts} xs={12}>
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
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
