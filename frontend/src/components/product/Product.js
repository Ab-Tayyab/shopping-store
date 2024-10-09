import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import menDataCollection from "../data/menCollections";
import "./Product.css";

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
    <div className="product-container">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={`${item.category} product`} />
            <div className="card-child">
              <p>Price: {item.price}</p>
              <i className="fa fa-plus"></i>
            </div>
            {item.discount && <p className="discount">Discount: {item.discount}</p>}

          </div>
        ))
      ) : (
        <p>Please select a category</p>
      )}
    </div>
  );
};

export default Product;