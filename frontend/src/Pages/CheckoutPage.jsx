import React from "react";
import CheckoutForm from "../componenets/CheckoutPAgeComp/CheckoutForm.jsx";
import OrderSummary from "../componenets/CheckoutPAgeComp/OrderSummary.jsx";
import "../styles/CheckoutPageStyle/CheckoutPage.css";
const CheckoutPage = () => {
    return (
       <div className="checkout-container">
        <div className="form-section">
            <h1 className="chekout-title-page">CHECKOUT</h1>
            <div className="navigation-checkout-page" style={{display:"flex",gap:"39px"}}>
            <p>INFORMATION</p>
            <p>SHIPPING</p>
            <p>PAYMENT</p>
            </div>
            <CheckoutForm/>
        </div>
        <div className="summary-section">
            <OrderSummary/>
        </div>
       </div>
    );
};

export default CheckoutPage;
