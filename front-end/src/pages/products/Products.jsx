import Footer from '~/components/footer/Footer';
import Item from '~/components/item/Item';
import Navbar from '~/components/navbar/Navbar';
import styles from './Products.module.css';

const Products = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
