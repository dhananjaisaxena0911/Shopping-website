import React, { useEffect, useState } from "react";
import Filter from "../componenets/ProductPageComponents/Filters.jsx";
import ProductHeader from "../componenets/ProductPageComponents/productBar.jsx";
import AllProductsGrid from "../componenets/ProductPageComponents/AllProductsGrid.jsx";
import "../styles/ProductPage.css";
const ProductPage = () => {
  const [filters, setFilters] = useState({
    size: null,
    availability: null,
    tags: [],
    categories: [],
    colors: [],
    prices: [],
  });

  const [products, setProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/getallproducts");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error Fetching All Products", err);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-wrapper">
      <div className="product-page-container">
        <div className={`filter-container ${isFilterOpen ? "open" : ""}`}>
          <Filter
            filters={filters}
            setFilters={setFilters}
            products={products}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </div>

        <div className="main-content">
          <div className="product-header-container">
            <ProductHeader selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          </div>

          <div className="filter-toggle-heading">
            <h1 onClick={() => setIsFilterOpen(true)}>FILTERS</h1>
          </div>

          <div className={`products-grid-container ${isFilterOpen ? "shifted" : ""}`}>
            <AllProductsGrid filters={filters} products={products} selectedTag={selectedTag} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;