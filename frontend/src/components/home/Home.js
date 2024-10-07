import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menData from "../data/menData";
import womenData from "../data/womenData";
import kidsData from "../data/kidsData";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Home() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    setCategory(categoryParam || "");

    switch (categoryParam) {
      case "men":
        setCategoryData(menData[0]);
        break;
      case "women":
        setCategoryData(womenData[0]);
        break;
      case "kids":
        setCategoryData(kidsData[0]);
        break;
      default:
        setCategoryData(null);
        break;
    }
  }, [location]);

  const handleImageClick = (productCategory) => {
    navigate(`/products/${productCategory}`, { state: { category } });
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="category-images">
        {categoryData ? (
          categoryData.images.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`${category} banner ${index + 1}`}
              className="category-image"
              onClick={() => handleImageClick(item.category)}
              style={{ cursor: "pointer" }}
            />
          ))
        ) : (
          <p>Please select a category</p>
        )}
        <div className="home-contact">
          <form>
            <h1>GET THE LATEST TRENDS FIRST</h1>
            <div>
              <input type="email" placeholder=" " required />
              <label>Email Address</label>
              <i className="fa fa-long-arrow-right"></i>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
