import Navbar from "../component/layout/Navbar";

import Footer from "../component/layout/Footer";
import WhatWeDo from "../component/section/WhatWeDo";
import Project from "../component/section/Project";
import OurClient from "../component/section/OurClient";
import Testimonial from "../component/section/Testimonial";
import Header from "../component/layout/Header";
import AboutUs from "../component/section/AboutUs";
import Solution from "../component/section/Solution";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <WhatWeDo />
      <OurClient />
      <Project />
      <Solution />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
