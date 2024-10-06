import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menData from "../data/menData";
import womenData from "../data/womenData";
import kidsData from "../data/kidsData";
import './Home.css';
import Navbar from "../navbar/Navbar";

function Home() {
  const location = useLocation();
  const navigate = useNavigate(); // for routing when clicking on an image
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState(null);

  // Parse the query parameters to get the category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    setCategory(categoryParam || "");

    // Load the correct data based on the category
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

  // Handle image click to navigate to product details
  const handleImageClick = (productCategory) => {
    // Navigate to the products page and pass category in the URL
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
              onClick={() => handleImageClick(item.category)} // Pass the specific category for routing
              style={{ cursor: "pointer" }} // Make it clear that images are clickable
            />
          ))
        ) : (
          <p>Please select a category</p>
        )}
      </div>
    </div>
  );
}

export default Home;
