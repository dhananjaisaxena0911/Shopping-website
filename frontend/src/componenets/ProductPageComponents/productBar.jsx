import React from "react";
import "../../styles/ProductHeader.css";

const ProductHeader = ({ selectedTag, setSelectedTag }) => {
  const tags = [
    "New Arrivals",
    "Best Sellers",
    "Everyday Essentials",
    "Street Style",
    "Smart Casual",
    "Lounge & Comfort",
    "Minimalist Picks",
    "Bold Prints",
    "Denim Edit",
    "Workwear",
    "Monochrome Looks",
    "Weekend Fits",
    "Statement Pieces",
    "Layer Up"
  ];

  return (
    <div className="product-header">
      {/* Left side: breadcrumb and search */}
      <div className="left-section-Product-Page">
        <h2 className="breadcrumb">Home / Products</h2>
        <h1 className="Prodcuts-text-heading">PRODUCTS</h1>
        <div className="search-input-wrapper-productpage">
          <input
            type="text"
            placeholder="Search"
            className="search-input-product-page"
          />
        </div>
      </div>

      {/* Right side: tag filters */}
      <div className="right-section">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`category-button-productPage ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(prev => prev === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductHeader;
