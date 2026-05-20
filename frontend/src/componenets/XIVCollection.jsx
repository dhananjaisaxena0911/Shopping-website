import React, { useState, useEffect } from "react";
import leftsmallarrow from "../assets/assets/leftsmallArrow.svg";
import rightsmallarrow from "../assets/assets/rightsmallarrow.svg";
import "../styles/XIVCollection.css";

const XIVCollection = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/collection/XIV%20Collections%2023-24");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching XIV Collection:", error);
      }
    };
    fetchCollection();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(products.length / 4) - 1;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const offset = currentIndex * ((400 * 4) + (41 * 3)); 

  return (
    <div className="xiv-collection-wrapper">
      {/* Header */}
      <div className="xiv-header">
        <h2>
          XIV<br /> COLLECTIONS<br /> 23-24
        </h2>
      </div>

      {/* Category & Filter Bar */}
      <div className="xiv-bar">
        <div className="xiv-bar-inner">
          <div className="xiv-categories">
            <button className="active">(ALL)</button>
            <button>Men</button>
            <button>Women</button>
            <button>KID</button>
          </div>
          <div className="xiv-filters">
            <span className="filter-button">Filter(+)</span>
            <div className="xiv-sorts">
              <span className="sorts-button">Sorts(-)</span>
              <div className="sort-options">
                <div>Less to more</div>
                <div>More to less</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Wrapper */}
      <div className="product-list-wrapper">
        <div className="product-list" style={{ transform: `translateX(-${offset}px)` }}>
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="image-wrapper">
                <img src={`http://localhost:5000${product.images[0]}`} alt={product.name} />
              </div>
              <div className="product-info">
                <p className="product-type">{product.tags?.join(", ") || "Category"}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-buttonsxiv">
                      <div className="arrow-btnxiv" onClick={handlePrev}>
                          <img src={leftsmallarrow} alt="Left"></img>
                      </div>
                      <div className="arrow-btnxiv" onClick={handleNext}>
                          <img src={rightsmallarrow} alt="Right"></img>
                      </div>
                  </div>
    </div>
  );
};

export default XIVCollection;
