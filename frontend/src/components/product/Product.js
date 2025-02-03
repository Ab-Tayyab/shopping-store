import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menDataCollection from "../data/menCollections";
import "./Product.css";
import Navbar from "../navbar/Navbar";

const Product = () => {
  const location = useLocation();

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParams = params.get("category");
    const subCategoryParams = params.get("subCategory");

    setCategory(categoryParams || "");
    setSubCategory(subCategoryParams || "");

    if (categoryParams === "men") {
      const filtered = menDataCollection.filter(
        (item) => item.category === subCategoryParams
      );
      setFilteredData(filtered);
    }
    // Add more cases for other categories (e.g., "women", "kids") if needed
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <h1>
          {filteredData.length > 0
            ? filteredData[0].category.charAt(0).toUpperCase() +
              filteredData[0].category.slice(1).toLowerCase()
            : "Please select a category"}
        </h1>
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Link
                to={`/productDetail/${item.id}`}
                state={{ id: item.id }}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <div key={item.id} className="product-card">
                  <img src={item.img} alt={`${item.category} product`} />
                  <div className="card-child">
                    <p>Price: {item.price}</p>
                    <p>{item.name}</p>
                  </div>
                  {item.discount && (
                    <p className="discount">Discount: {item.discount}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p>Please select a category</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
