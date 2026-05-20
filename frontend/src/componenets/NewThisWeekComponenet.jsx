import React, { useState, useEffect } from "react";
import leftArrow from "../assets/assets/leftsmallArrow.svg";
import rightArrow from "../assets/assets/rightsmallarrow.svg";
import "../styles/NewThisWeekCompCss.css";

const NewThisWeek = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/collection/New%20This%20Week");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching new this week products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(products.length / 4) - 1;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const offset = currentIndex * ((305 * 4) + (40 * 3));

  return (
    <div className="new-this-week-section">
      <div className="new-this-week-header">
        <h2>
          NEW THIS<br />WEEK
          <span>({products.length})</span>
        </h2>
        <button className="see-all">SEE ALL</button>
      </div>

      <div className="product-list-wrapper23">
        <div className="new-this-week-products" style={{ transform: `translateX(-${offset}px)` }}>
          {products.map((product) => (
            <div key={product._id} className="product-card23">
              <div className="image-wrapper">
                <img src={`http://localhost:5000${product.images[0]}`} alt={product.name} />
              </div>
              <div className="product-info23">
                <p className="product-type">{product.tags?.join(", ")}</p>
                <div className="name-price-row">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="new-this-week-pagination">
        <div className="arrow-btn" onClick={handlePrev}>
          <img src={leftArrow} alt="Previous" />
        </div>
        <div className="arrow-btn" onClick={handleNext}>
          <img src={rightArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default NewThisWeek;
