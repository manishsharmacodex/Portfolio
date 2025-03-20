import React from "react";
import "./AboutUs.css";
import Title from "../Title/Title";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <Title title="About Us" subTitle="Our Journey And Life Career" />
      <div className="about-box">
        <div className="about-left">
          <table>
            <tr>
              <th colSpan="3">Skills</th>
            </tr>

            <tr>
              <th>S.No</th>
              <th>Experience</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Web Development</td>
            </tr>

            <tr>
              <td>2</td>
              <td>PHP</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Wordpress</td>
            </tr>

            <tr>
              <td>4</td>
              <td>MySQL</td>
            </tr>

            <tr>
              <td>5</td>
              <td>C,C++</td>
            </tr>

          </table>
        </div>
        <div className="about-right"></div>
      </div>
    </div>
  );
};

export default AboutUs;
