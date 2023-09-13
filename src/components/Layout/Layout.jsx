import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";

const Layout = ({ cartOpened, setCartOpened }) => {
  return (
    <div>
      {cartOpened ? <Drawer onClose = {() => setCartOpened(false)} /> : null}
      <Header onClickOpen={() => setCartOpened(true)} />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
