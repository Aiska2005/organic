import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import News from "./pages/News/News";
import axios from "axios";
import Skeleton from "./components/Skeleton/Skeleton";
import Card from "./components/Card/Card";

const App = () => {
  const [item, setItem] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((res) => {
        return setItem(res.data);
      }).finally(setTimeout(() => {
        setIsLoading(false)
      },1000))
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout setCartOpened={setCartOpened} cartOpened={cartOpened} />
          }
        >
          <Route index element={<Home isLoading={isLoading} item={item} />} />
          <Route path="shop" element={<Shop isLoading={isLoading} product={item} />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
