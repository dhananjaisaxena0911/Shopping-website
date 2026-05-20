import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import "../../styles/CartPageStyle/CartItems.css";
import againLogo from "../../assets/assets/Again.png";
const CartItem = ({ item }) => {

    const { updateQuantity, removeFromCart } = useCart();

    const handleIncrement = () => {
        updateQuantity(item.id, item.size, item.color, item.selectedImage, item.quantity + 1);
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.size, item.color, item.selectedImage, item.quantity - 1);
        }
    };
    const handleRemove = () => {
        removeFromCart(item.id, item.size, item.color, item.selectedImage);
    };
    return (
        <div className="cart-item">
            <div className="UpperSection" >
                <div className="product-image">
                    <img
                        src={`http://localhost:5000${item.selectedImage || (Array.isArray(item.images) && item.images[0]) || "/fallback.jpg"}`}
                        alt={item.name}
                    />
                </div>

                <div className="right-info" style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: 'column' }}>
                        <p className="item-variant">{item.size || "N/A"}</p>
                        <div className="hcolor-box" style={{ backgroundColor: item.color || "#eee" }}></div>
                    </div>

                    <div className="quantity-controls">
                        <button onClick={handleIncrement}>+</button>
                        <span>{item.quantity}</span>
                        <button onClick={handleDecrement}>-</button>
                    </div>

                    <button className="remove-items"
                        onClick={handleRemove}
                    >
                        <img src={againLogo} />
                    </button>
                </div>

            </div>

            <div className="product-info">
                <p className="product-type-23">{item.name}</p>
                <div className="product-name-price-row-23">
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>


        </div>
    );
};

export default CartItem;