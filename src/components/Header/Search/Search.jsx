import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Search.css";

const Search = () => {
  return (
    <div className="block_search">
      <div>
        <input className="inputSearch" type="search" placeholder="search" />
        <div className="iconSearch">
          <BsSearch />
        </div>
      </div>
      <div>
        <div className="iconCart">
          <AiOutlineShoppingCart />
        </div>
        <button className="buttonCart">Cart 0</button>
      </div>
    </div>
  );
};

export default Search;
