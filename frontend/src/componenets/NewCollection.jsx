import React, { useEffect, useState } from "react";
import "../styles/NewCollection.css";
import Base_URL from "../../utils/config.js";
const NewCollectionProducts = ({ currentIndex }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const response = await fetch(`${Base_URL}/api/products/collection/New%20Collection`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching new collection:", error);
            }
        };

        fetchCollection();
    }, []);

    const offset = currentIndex * (400 + 41);

    return (
        <section className="new-collection-section23">
            <div className="product-list-wrapper">
                <div className="product-list" style={{ transform: `translateX(-${offset}px)` }}>
                    {products.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={`${Base_URL}${product.images[0]}`} alt={product.name} />
                            <div className="product-details">
                                <h3 className="new-collection-product-name">{product.name}</h3>
                                <p className="new-collection-product-price">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewCollectionProducts;
