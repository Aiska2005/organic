import React, { useState } from "react";
import Card from "../../../components/Card/Card";
// css
import "./Section_second.css";
import Modal from "../../../components/Modal/Modal";

const Section_second = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <span className="textCategories">Categories</span>
        <h5>Our Products</h5>
      </div>
      {openModal && <Modal />}
      {
        <div className="blockAxios">
          {item.map((el) => (
            <Card key={el.id} {...el} setOpenModal={setOpenModal} />
          ))}
        </div>
      }
    </div>
  );
};

export default Section_second;
