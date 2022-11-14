import Advantages from '~/components/Advantages/Advantages';
import Benefits from '~/components/Benefits/Benefits';
import Contact from '~/components/Contact/Contact';
import Featured from '~/components/Featured/Featured';
import ScrollToTop from '~/components/scrollToTop/ScrollToTop';
import ListData from '~/components/ListData/ListData';

const Home = () => {
  return (
    <>
      <Featured />
      <Benefits />
      <ScrollToTop />
      <ListData />
      <Advantages />
      <Contact />
    </>
  );
};

export default Home;
