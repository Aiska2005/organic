import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";

const Layout = ({ cartOpened, setCartOpened, cartProduct, onDelete, onSearch, searchValue }) => {
  return (
    <div>
      {cartOpened ? <Drawer onDelete={onDelete} cartProduct={cartProduct}  onClose = {() => setCartOpened(false)} /> : null}
      <Header searchValue={searchValue} onSearch={onSearch} onClickOpen={() => setCartOpened(true)} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
