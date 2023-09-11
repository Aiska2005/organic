import React from "react";
import "./Shop.scss";
import Card from "../../components/Ui/Card/Card";

const Shop = () => {
  const cardArr = {
    Variants: "Veagetable",
    Image: "/public/assets/jsonImg/Photo.png",
    title: "Calabrese Broccoli",
    price: 12,
  };

  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="shop-content">
            <h1>Shop</h1>
          </div>
        </div>
      </section>
      <div className="container mt-20 d-flex  justify-between">
        <Card
          Variants={cardArr.Variants}
          image={cardArr.Image}
          title={cardArr.title}
          price={cardArr.price}
        />
      </div>
    </>
  );
};

export default Shop;
