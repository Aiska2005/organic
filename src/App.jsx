import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import News from "./pages/News/News";
import axios from "axios";

const App = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product").then((res) => {
      return setItem(res.data);
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home item={item} />} />
          <Route path="shop" element={<Shop product={item} />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
