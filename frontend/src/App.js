import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/product/Product";
import HomePageCategory from "./components/homeCategoryPage/HomePageCategory";
import SubCategory from "./components/subCategory/SubCategory";
import ProductDetail from "./components/productDetail/ProductDetail";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Signup from "./components/account/Signup";
import Signin from "./components/account/Signin";
import Contact from "./components/contact/Contact";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageCategory />} />
          <Route path="/home" element={<SubCategory />} />
          <Route path="/products" element={<Product />} />
          <Route
            path="/productDetail/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/shoppingCart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
