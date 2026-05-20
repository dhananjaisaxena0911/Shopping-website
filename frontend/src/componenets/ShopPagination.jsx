import React from "react";
import "../styles/ShopPagination.css";
import rightArrow from "../assets/assets/Vector.svg";
import leftsmallarrow from"../assets/assets/leftsmallArrow.svg";
import rightsmallarrow from"../assets/assets/rightsmallarrow.svg";
import { Link } from "react-router-dom";
const ShopPagination = ({onNext,onPrev}) => {
    return (
        <div className="shop-pagination11">
            <Link to="/shop" className="shop-button11">
    <span className="shop-text11">Go To Shop</span>
    <span className="shop-icon11">
        <img src={rightArrow} alt="arrow" />
    </span>
</Link>
            <div className="pagination-buttons11">
                <div className="arrow-btn11" onClick={onPrev}>
                    <img src={leftsmallarrow} alt="Left"></img>
                </div>
                <div className="arrow-btn11" onClick={onNext}>
                    <img src={rightsmallarrow} alt="Right"></img>
                </div>
            </div>
        </div>
    );
};

export default ShopPagination;