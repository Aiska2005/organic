import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Search = ({onClickOpen}) => {
  return (
    <div className="block_search">
      <div>
        <input className="inputSearch" type="search" placeholder="search" />
        <div className="iconSearch">
          <BsSearch />
        </div>
      </div>
      <div onClick={onClickOpen} >
        <div className="iconCart">
          <AiOutlineShoppingCart />
        </div>
        <button className="buttonCart">Cart 0</button>
      </div>
    </div>
  );
};

export default Search;
