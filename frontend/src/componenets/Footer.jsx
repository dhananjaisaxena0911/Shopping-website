import React from "react";
import "../styles/Footer.css";
import logoIcon from "../assets/assets/logo.svg";

function Footer() {
    return (
        <div className="custom-foot d-flex">
            <div className="col-6">
                <ul type="none">
                    <li className="custom-footer-head">INFO</li>
                    <li className="custom-footer-desc">PRICE</li>
                    <li className="custom-footer-desc">ABOUT</li>
                    <li className="custom-footer-desc">CONTACTS</li>
                </ul>
                <ul type="none">
                    <li className="custom-footer-head">LANGUAGES</li>
                    <li className="custom-footer-desc">ENG</li>
                    <li className="custom-footer-desc">ESP</li>
                    <li className="custom-footer-desc">SVE</li>
                </ul>
            </div>

            <div className="float">
                <img src={logoIcon} alt="Logo"/>
            </div>

            <div className="col-6">
                <ul type="none">
                    <li className="custom-footer-head">TECHNOLOGIES</li>
                </ul>
                <ul type="none">
                    <li className="custom-footer-head">Near-field communication </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;