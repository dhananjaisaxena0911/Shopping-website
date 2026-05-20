import React from "react";
import { Link } from "react-router-dom";
import "../../styles/favouritePageStyle/favouriteitem.css"
const FavouriteItem = ({ item }) => {
    if(!item) return null;

    return (
        <Link to={`/product/${item._id}`} className="favourite-item-link" style={{ textDecoration: "none" }}>        <div className="favourite-item">
            <img
                    src={`http://localhost:5000${item.images?.[0]}`}
                    alt={item.name}
                className="favourite-product-image"
            />
            <div className="details">
                {/* <h4>{product.name}</h4> */}
                <p className="product-type-fav">{item.tags}</p>
                <div className="product-name-price-row-fav">
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">${item.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default FavouriteItem;
