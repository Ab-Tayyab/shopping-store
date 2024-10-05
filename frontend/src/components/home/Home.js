import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import menData from "../data/menData";
import womenData from "../data/womenData";
import kidsData from "../data/kidsData";
import './Home.css'

function Home() {
  const location = useLocation();
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

  return (
    <div className="home-container">

      <div className="category-images">
        {categoryData ? (
          categoryData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${category} banner ${index + 1}`}
              className="category-image"
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
