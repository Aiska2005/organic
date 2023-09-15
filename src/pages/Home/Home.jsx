import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Home.css";
import Section_one from "./Section_one/Section_one";
import Section_second from "./Section_second/Section_second";
import Section_three from "./Section_three/Section_three";

const Home = ({ item , isLoading , onAddModal,modalProduct,onAddCart }) => {
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
      <Section_second onAddCart={onAddCart} modalProduct={modalProduct} onAddModal={onAddModal} isLoading={isLoading} items={item} />
      <Section_three />
    </div>
  );
};

export default Home;
