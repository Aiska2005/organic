import React, { useEffect, useState } from "react";
import "./Shop.scss";
import Card from "../../components/Ui/Card/Card";
import axios from "axios";

const Shop = ({product}) => {

  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="shop-content">
            <h1>Shop</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="shop-card">
          {product.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
