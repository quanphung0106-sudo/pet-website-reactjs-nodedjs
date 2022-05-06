import Advantages from "../../components/advantages/Advantages";
import Benefits from "../../components/benefits/Benefits";
import Contact from "../../components/contact/Contact";
import DataList from "../../components/datalist/DataList";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Benefits />
      <ScrollToTop />
      <DataList />
      <Advantages />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
