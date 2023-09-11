import React from "react";
import Card from "../../../components/Ui/Card/Card";
// css
import "./Section_second.css";

const Section_second = ({ item }) => {
  return (
    <div className="container blockAxios">
      {item.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Section_second;
