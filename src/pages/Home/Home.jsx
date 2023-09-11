import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Home.css";

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
          <button>
            Explore Now
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
