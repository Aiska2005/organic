import React from "react";
import "./Drawer.scss";

const Drawer = ({onClose}) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center">
          Корзина <img  onClick={onClose} src="/public/assets/btn-remove.svg" alt="" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center ">
            <div className="cartItemImg"></div>
            <div>
                <p>title</p>
                <b>price</b>
            </div>
            <img src="/public/assets/btn-remove.svg" alt="" />
          </div>
        </div>

        <div className="pusto1 d-flex justify-center">
            <div className="pusto">
              <img src="/public/assets/pusto.png" alt="" />
              <h2>Корзина пустая</h2>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

              <button className="greenButton">
                <img src="/public/assets/left.png" alt="" /> Вернуться назад
              </button>
            </div>
          </div>

        <div className="cart-total-block">
            <ul>
                <li className="d-flex">
                    <span>Итого:</span>
                    <div></div>
                    <b>13$</b>
                </li>
            </ul>
            <button className="greenButton">
                Оформить заказ <img src="/public/assets/arrow.png" alt="" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
