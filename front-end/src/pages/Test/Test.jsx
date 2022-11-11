import { Box } from '@mui/material'
import React from 'react'
import styles from './Test.module.scss'
import Grid from '@mui/material/Unstable_Grid2';

const Test = () => {
    //sm: tablet
    //xs: mobile
  return (
    <Grid container className={styles.Container}>
      <Grid container className={styles.Box1} xs={3} sm={6} md={4} lg={12}>
        <Grid className={styles.Box11} xs={12} sm={12} md={6} lg={12}>
          Box 1-1
        </Grid>
        <Grid className={styles.Box12} xs={12} sm={12} md={6} lg={12}>
          Box 1-2
        </Grid>
      </Grid>
      <Grid className={styles.Box2} xs={3} sm={6} md={4} lg={12}>
        Box 2
      </Grid>
      <Grid className={styles.Box3} xs={3} sm={6} md={4} lg={12}>
        Box 3
      </Grid>
      <Grid className={styles.Box4} xs={3} sm={6} md={4} lg={12}>
        Box 4
      </Grid>
    </Grid>
  );
}

export default Test