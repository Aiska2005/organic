import React, { useEffect, useState } from "react";
import "./Shop.scss";
import Card from "../../components/Card/Card";
import Skeleton from "../../components/Skeleton/Skeleton";
import Modal from '../../components/Modal/Modal'

const Shop = ({ product, isLoading,onAddModal }) => {
  const [openModal, setOpenModal] = useState(false);
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
        {openModal && <Modal />}
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
                <Card onAddModal={onAddModal} setOpenModal={setOpenModal} key={item.id} items={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
