import React from "react";
import './Modal.scss'

const Modal = ({setOpenModal,product, onAddCart}) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div onClick={() =>{
          setOpenModal(false)
        }} className="modal-remove"><img src="/public/assets/btn-remove.svg" alt="" /></div>
        <div className="modal-img">
          <img src={product.image} alt="" />
        </div>
        <div className="modal-title">
          <h1>{product.title}</h1>
          <span><img src="/public/assets/Star.png" alt="" /></span>
          <div className="price">${product.price}.00</div>
          <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

          <div className="modal-addtocart">
            <h3>Quantity :</h3>
            <div  className="modal-count">1</div>
            <button onClick={() => onAddCart(product)} className="addToCart">Add To Cart <span><img src="/public/assets/right.svg" alt="" /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
