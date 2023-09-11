import React from "react";

// css
import "./Section_one.css";

const Section_one = () => {
  return (
    <div className="contantSection container">
      <div className="photo">
        <div className="textCenter">
          <span>Natural!!</span>
          <h4>
            Get Garden
            <br />
            Fresh Fruits
          </h4>
        </div>
      </div>
      <div className="photo2">
        <div className="textCenter">
          <span className="offerText">Offer!!</span>
          <h3>
            Get 10% off
            <br />
            on Vegetables
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section_one;
