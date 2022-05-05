import Benefits from "../../components/benefits/Benefits";
import DataList from "../../components/datalist/DataList";
import Featured from "../../components/featured/Featured";
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
    </>
  );
};

export default Home;
