import React, { useState } from "react";
import Card from "../../../components/Card/Card";
// css
import "./Section_second.css";
import Modal from "../../../components/Modal/Modal";
import Skeleton from "../../../components/Skeleton/Skeleton";

const Section_second = ({ items , isLoading , onAddModal }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <span className="textCategories">Categories</span>
        <h5>Our Products</h5>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      {
        <div className="blockAxios">
          {isLoading ? (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <>
              {items.map((el) => (
                <Card onAddModal={onAddModal} key={el.id} items ={el} setOpenModal={setOpenModal} />
              ))}
            </>
          )}
        </div>
      }
    </div>
  );
};

export default Section_second;
