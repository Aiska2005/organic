import React from "react";
import "./Card.scss";

const Card = ({Variants, image, title, price}) => {
  return (
    <div className="card">
      <button className="card-variants">{Variants}</button>
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-block-info">
        <div className="card-info">
          <h2>{title}</h2>
        </div>
        <div className="card-price">
          <p>${price}.00</p>
          <span>
            <img src="/public/assets/Star.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
