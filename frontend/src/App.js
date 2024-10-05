import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from './components/frontPage/FrontPage'
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
