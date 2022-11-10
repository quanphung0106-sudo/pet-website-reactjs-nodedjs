import { useEffect } from 'react';
import Footer from '~/components/footer/Footer';
import Item from '~/components/item/Item';
import Navbar from '~/components/navbar/Navbar';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import styles from './Products.module.css';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Item />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Products;
