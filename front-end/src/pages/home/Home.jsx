import Advantages from '~/components/advantages/Advantages';
import Benefits from '~/components/benefits/Benefits';
import Contact from '~/components/contact/Contact';
import DataList from '~/components/datalist/DataList';
import Featured from '~/components/featured/Featured';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';

const Home = () => {
  return (
    <>
      <Featured />
      <Benefits />
      <ScrollToTop />
      <DataList />
      <Advantages />
      <Contact />
    </>
  );
};

export default Home;
