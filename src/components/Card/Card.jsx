import React, { useState } from "react";
import "./Card.scss";

const Card = ({ items, setOpenModal, onAddModal }) => {
  return (
    <>
      <div
        onClick={() => {
          setOpenModal(true);
          onAddModal(items)

        }}
        className="card"
      >
        <button className="card-variants">{items.variants}</button>
        <div className="card-img">
          <img src={items.image} alt="" />
        </div>
        <div className="card-block-info">
          <div className="card-info">
            <h2>{items.title}</h2>
          </div>
          <div className="card-price">
            <p>${items.price}.00</p>
            <span>
              <img src="/public/assets/Star.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
