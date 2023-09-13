import React, { useEffect, useState } from "react";
import "./Shop.scss";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Skeleton/Skeleton";

const Shop = ({ product, isLoading }) => {
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
              {product.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
