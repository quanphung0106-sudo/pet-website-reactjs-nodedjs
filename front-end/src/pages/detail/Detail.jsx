import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import styles from './Detail.module.css';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import ItemDetail from '~/components/itemDetail/ItemDetail';

const Detail = () => {
  // const handleChecked = (e, checkbox) => {
  //   let checked = e.target.checked;
  //   console.log(checked);
  //   if (checked === true) {
  //     checkboxes.filter((item) => {
  //       if (item.id === checkbox.id) {
  //         console.log(item.id, checkbox.id, check);
  //         return setTypes([checkbox]) && setCheck(false);
  //       } else {
  //         setCheck(true);
  //       }
  //     });
  //     setCheck(false);
  //     console.log(check);
  //   } else {
  //     setTypes(types.filter((type) => type.id !== checkbox.id));
  //     setCheck(false);
  //     console.log(checked, 'Bye');
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ItemDetail />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Detail;
