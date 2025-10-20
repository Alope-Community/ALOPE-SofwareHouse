import Navbar from "../component/layout/Navbar";

import Footer from "../component/layout/Footer";
import Project from "../component/section/Project";
import Header from "../component/layout/Header";
import OurProduct from "../component/section/OurProduct";
import OurService from "../component/section/OurService";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <OurService />
      <Project />
      <OurProduct />
      <Footer />
    </>
  );
};

export default Home;
