import React from "react";
import menuIcon from "../assets/assets/menu.svg";
import logo from "../assets/assets/logo.svg";
import wishlist from "../assets/assets/wishlist.svg";
import cartText from "../assets/assets/Rectangle 1.png";
import cartIcon from "../assets/assets/cart.svg";
import ProfileIcon from "../assets/assets/profile.svg";
import "../styles/navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navBar-left">
                <button className="menu-btn">
                    <img src={menuIcon} alt="Menu" className="menu-icon" ></img>
                </button>
                <ul className="nav-links">
                    <li className="homelist"><a href={null}>Home</a></li>
                    <li className="collectionlist"><a href="/shop">Collections</a></li>
                    <li className="newlist"><a href={null}>New</a></li>
                </ul>
            </div>
            <div className="Navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-right">
                <Link to="/cart" state={{showFavourites:true}} className="wishList-icon">
                    <img src={wishlist} alt="wishlist" className="wishlist-image"/>
                </Link>
                <Link to="/cart" className="cartText">
                    <img src={cartText} alt="cartText" className="cart-Text" />
                    <span className="cart-label">Cart</span>
                </Link>
                {/* <button className="cartIcon">
                    <img src={cartIcon} alt="cartIcon" className="cart-Icon" />
                </button> */}

                <Link to="/cart" className="cartIcon">
                    <img src={cartIcon} alt="cartIcon" className="cart-Icon"/>
                </Link>
                <button className="profileIcon">
                    <img src={ProfileIcon} alt="profileIcon" className="profile-Icon" />
                </button>
            </div>

        </nav>
    );
};

export default Navbar;