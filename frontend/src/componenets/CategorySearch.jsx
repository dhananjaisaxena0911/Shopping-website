import React from "react";
import "../styles/searchCategory.css"
const CategorySearch=()=>{
    return (
        <section className="category-search">
            <div className="category-button">
                <button className="category-btn">MEN</button><br></br>
                <button className="category-btn">WOMEN</button><br></br>
                <button className="category-btn">KIDS</button>
            </div>
            <div className="search-input-wrapper">
                <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                type="text"
                placeholder="Search"
                
                className="search-input">
                </input>
            </div>
        </section>
    );
};
export default CategorySearch;