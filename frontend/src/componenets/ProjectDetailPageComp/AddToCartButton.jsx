import React from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const AddToCartButton=({ product, selectedColor, selectedSize,selectedImage })=>{
    const{addToCart}=useCart();
    const navigate=useNavigate();
    const handleAdd=()=>{
        addToCart({
            ...product,
            color: selectedColor,
            size: selectedSize,
            selectedImage: selectedImage || product.images?.[0]
        });
        console.log(`Added To Cart ${product.name}`);
        navigate("/cart");
    };

    return <button className="add-button" onClick={handleAdd}>ADD</button>
};

export default AddToCartButton;