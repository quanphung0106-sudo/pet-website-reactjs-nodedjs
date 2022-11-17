import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import Item from '~/components/Item/Item';
import styles from './Products.module.scss';
import Search from '~/components/Search/Search';
import { Box } from '@mui/material';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Grid container className={styles.Container} lg={12}>
        <Grid lg={2} className={styles.Search}>
          <Search />
        </Grid>
        <Grid wrap='wrap' container lg={10} className={styles.Items}>
          <Item />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
