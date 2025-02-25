import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menBannerData from "../data/menData";
import womenBannerData from "../data/womenData";
import kidsBannerData from "../data/kidsData";
import "./SubCategory.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import GetEmail from "../getEmail/GetEmail";

function SubCategory() {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    setCategory(categoryParam || "");

    let selectedCategoryData = null;

    switch (categoryParam) {
      case "men":
        selectedCategoryData = menBannerData[0];
        break;
      case "women":
        selectedCategoryData = womenBannerData[0];
        break;
      case "kids":
        selectedCategoryData = kidsBannerData[0];
        break;
      default:
        selectedCategoryData = null;
        break;
    }

    if (selectedCategoryData) {
      const { mainCategory, images } = selectedCategoryData; // Destructure the main category and images
      setCategoryData({ mainCategory, images });
    }
  }, [location]);

  const handleImageClick = (mainCategory, subCategory) => {
    navigate(`/products?category=${mainCategory}&subCategory=${subCategory}`);
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="category-images">
        {categoryData.images ? (
          categoryData.images.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`${categoryData.mainCategory} banner ${index + 1}`}
              className="category-image"
              onClick={() =>
                handleImageClick(categoryData.mainCategory, item.category)
              }
              style={{ cursor: "pointer" }}
            />
          ))
        ) : (
          <p>Please select a category</p>
        )}
        <GetEmail />
        <Footer />
      </div>
    </div>
  );
}

export default SubCategory;
