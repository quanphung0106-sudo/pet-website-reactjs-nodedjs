import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import styles from './Detail.module.css';

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>Hello</div>
      <Footer />
    </>
  );
};

export default Detail;
