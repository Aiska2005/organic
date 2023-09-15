import React, { useState } from "react";
import Card from "../../../components/Card/Card";
// css
import "./Section_second.css";
import Modal from "../../../components/Modal/Modal";
import Skeleton from "../../../components/Skeleton/Skeleton";

const Section_second = ({ items , isLoading , onAddModal , modalProduct, onAddCart,searchValue }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <span className="textCategories">Categories</span>
        <h5>Our Products</h5>
      </div>
      {openModal && <>{
        modalProduct.map(item => (
          <Modal key={item.id} onAddCart={onAddCart} product={item} setOpenModal={setOpenModal} />
        ))
      }</>}
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
              {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((el) => (
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
