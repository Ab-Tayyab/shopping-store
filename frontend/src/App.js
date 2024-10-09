import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage'
import Home from "./components/home/Home";
import Signup from "./components/account/Signup";
import Signin from "./components/account/Signin";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
