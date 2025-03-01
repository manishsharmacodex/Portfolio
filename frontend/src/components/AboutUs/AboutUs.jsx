import React from "react";
import "./AboutUs.css";
import Title from "../Title/Title";

const AboutUs = () => {
  return <div className="aboutus">
    <Title title="About Us" subTitle="Our Journey And Life Career" />
    <div className="about-box">
      <div className="about-left"></div>
      <div className="about-right"></div>
    </div>
  </div>;
};

export default AboutUs;
