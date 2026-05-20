import React, { useState } from "react";
import "../../styles/CartPageStyle/CartSummary.css";
const CartSummary = ({ subTotal, shipping, onContinue }) => {
    const total = subTotal + shipping;
    const [agreed, setAgreed] = useState(false);
    const handleCheckBoxChange = (e) => {
        setAgreed(e.target.checked);
    }
    return (
        <div className="cart-summary">
            <h3>ORDER SUMMARY</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', gap: '80px' }}>
                <p>Subtotal:</p>
                <p>${subTotal}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', gap: '80px' }}>
                <p>Shipping:</p>
                <p>${shipping}</p>
            </div>
            <hr style={{ width: '229px', margin: '15px 33px' }} />


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth: '300px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', paddingRight: '50px', paddingLeft: '40px' }}>
                    <h4 style={{ margin: 0, fontSize: '18px', fontFamily: "'Beatrice-deck-trial-medium', sans-serif" }}>Total</h4>
                    <small style={{ color: 'gray', alignSelf: 'center' }}>(TAX INCL.)</small>
                </div>
                <h4 style={{ margin: 0, fontFamily: "'Beatrice-deck-trial-medium', sans-serif" }}>${total.toFixed(2)}</h4>
            </div>


            <label className="terms">
                <input type="checkbox" className="custom-checkmark-cart"
                    checked={agreed}
                    onChange={handleCheckBoxChange}
                />
                <span className="custom-checkmark"></span>
                I agree to the Terms and Conditions
            </label>


            <button className="Continuebutton" onClick={onContinue} disabled={!agreed} style={{
                opacity: agreed ? 1 : 0.5,
                cursor: agreed ? "pointer" : "not-allowed"
            }}>CONTINUE</button>
        </div>
    );
};

export default CartSummary;