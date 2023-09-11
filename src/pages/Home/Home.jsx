import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Home.css";
import Section_one from "./Section_one/Section_one";

const Home = () => {
  return (
    <div>
      <div className="homeImg">
        <div className="center_contant_home container">
          <h3>100% Natural Food</h3>
          <h1>
            Choose the best
            <br />
            healthier way
            <br />
            of life
          </h1>
          <button className="button_home">
            Explore Now
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
      <Section_one />
    </div>
  );
};

export default Home;
