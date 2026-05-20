import React from "react";

const CheckoutForm = () => {
    return (
        <form className="checkout-form">
            <h6>CONTACT INFO</h6>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />

            <h6>SHIPPING ADDRESS</h6>
            <div className="row-checkoutpage">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State / Region" />
            <input type="text" placeholder="Address" />
            <div className="row-checkoutpage">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Postal Code" />
            </div>

            <button className="shipping-button">Shipping →</button>
        </form>
    );
};

export default CheckoutForm;
