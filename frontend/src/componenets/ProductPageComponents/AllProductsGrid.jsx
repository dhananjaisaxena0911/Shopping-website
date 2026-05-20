import React, { useEffect, useState } from "react";
import "../../styles/AllProductsGrid.css";
import { Link } from "react-router-dom";
const AllProductsGrid = ({ filters, products, selectedTag }) => {

    const filterProducts = () => {
        return products.filter((product) => {
            const sizeArray = Array.isArray(product.size) ? product.size : [product.size.toString()];

            const matchesSize = !filters?.size || sizeArray.includes(filters.size.toString());
            const matchesAvailability =
                !filters?.availability ||
                (filters.availability === "in" && Number(product.stock) > 0) ||
                (filters.availability === "out" && Number(product.stock) <= 0);

            const selectedTags = [...(filters.tags || [])];
            if (selectedTag && !selectedTags.includes(selectedTag)) {
                selectedTags.push(selectedTag);
            }

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some(tag => product.tags.includes(tag));

            const matchCategory =
                !filters.categories || filters.categories.length === 0 ||
                filters.categories.includes(product.category);

            const matchColor =
                !filters.colors || filters.colors.length === 0 ||
                filters.colors.includes(product.color);

                const matchesPrice =
                !filters.prices || filters.prices.length === 0 ||
                filters.prices.some(range => product.price >= range.min && product.price < range.max);
              
                
            return matchesSize && matchesAvailability && matchesTags && matchCategory && matchColor && matchesPrice;
        });
    };

    const filteredProducts = filterProducts();

    return (
        <div className="all-products-wrapper">
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Link to={`/product/${product._id}`} className="product-link" key={product._id} >
                    <div className="product-card-allProducts">
                      <div className="image-wrapper-allProducts">
                        <img src={`http://localhost:5000${product.images[0]}`} alt={product.name} />
                      </div>
                      <div className="product-info">
                        <p className="product-type">{product.tags?.join(", ") || "Category"}</p>
                        <div className="product-name-price-row">
                          <h3 className="product-name">{product.name}</h3>
                          <p className="product-price">${product.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProductsGrid;
