import React, { useState } from "react";
import Card from "../../../components/Ui/Card/Card";
// css
import "./Section_second.css";
import Skeleton from "../../../components/Skeleton/Skeleton";

const Section_second = ({ item }) => {
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        {" "}
        <span className="textCategories">Categories</span>
        <h5>Our Products</h5>
      </div>
      {
        <div className="  blockAxios ">
          {item.map((el) => (
            <Card key={el.id} {...el} />
          ))}
        </div>
      }
    </div>
  );
};

export default Section_second;
