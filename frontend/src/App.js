import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage'
import Home from "./components/home/Home";
import Signup from "./components/account/Signup";
import Signin from "./components/account/Signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
