import React from "react";

import { useCart } from "../CartContext/CartContext.jsx";


const OrderSummary = () => {
    const { cartItems } = useCart();
    const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingAmount = 10;
    return (
        <div className="order-summary">
            <h6>YOUR ORDER</h6>
            {cartItems.map((item, idx) => (
                <div key={idx} className="order-item">
                    <img src={`http://localhost:5000${item.selectedImage}`} alt={item.name} />
                    <div className="Right-section-checkout-Card">
                        <div className="first-row-checkout-card">
                            <p>{item.name}</p>
                            <span className="change-text">Change</span>
                        </div>
                        <div className="second-row-checkout-card">
                            <p>{item.color || "Color"}/{item.size || "Size"}</p>
                        </div>
                        <div className="third-row-checkout-card">
                            <p className="quantity-third-row">({item.quantity})</p>
                            <p className="price-third-row">${item.price || "Price"}</p>
                        </div>
                    </div>

                </div>
            ))}
            <div className="order-total">
                <div className="first-row-bottom-checkout">
                    <p>Subtotal:</p>
                    <p> ${(subTotal).toFixed(2)}</p>
                </div>
                <div className="second-row-bottom-checkout">
                    <p>Shipping:</p>
                    <p>${shippingAmount}</p>
                </div>
                <hr />
                <div className="third-row-bottom-checkout">
                    <p>Total:</p>
                    <p>${(subTotal + shippingAmount).toFixed(2)}</p>
                </div>

            </div>
        </div>
    );
};

export default OrderSummary;