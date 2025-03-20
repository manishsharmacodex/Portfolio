import React from "react";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default Home;
