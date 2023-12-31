import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import News from "./pages/News/News";
import axios from "axios";

const App = () => {
  const [item, setItem] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalItem, setModalItem] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:3001/product")
        .then((res) => {
          return setItem(res.data);
        })
        .finally(
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        );
    }
    fetchData();
  }, []);

  const addModalItem = (obj) => {
    setModalItem((prev) => [...prev, obj]);
  };
  const addCartItem = (obj) => {
    setCartProduct((prev) => [...prev, obj]);
  };
  const removeDelete = (id) => {
    setCartProduct((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              searchValue={searchValue}
              onSearch={onChangeInput}
              onDelete={removeDelete}
              cartProduct={cartProduct}
              setCartOpened={setCartOpened}
              cartOpened={cartOpened}
            />
          }
        >
          <Route
            index
            element={
              <Home
                searchValue={searchValue}
                onAddCart={addCartItem}
                modalProduct={modalItem}
                onAddModal={addModalItem}
                isLoading={isLoading}
                item={item}
              />
            }
          />
          <Route
            path="shop"
            element={
              <Shop
                searchValue={searchValue}
                onAddCart={addCartItem}
                modalProduct={modalItem}
                onAddModal={addModalItem}
                isLoading={isLoading}
                product={item}
              />
            }
          />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
