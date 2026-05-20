import SizeSelector from "./SizeSelector.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import hurt from "../../assets/assets/wishlist.svg";
import ColorSelector from "./ColorSelector.jsx";
import { useState } from "react";
// import WishListIcon from "../../assets/assets/Heart.svg";
// import { useWishList } from "../WishListContext";
const ProductInfo = ({ product, selectedImage, onAddToFavorite }) => {
    // const{toggleWishlist,isInWishList}=useWishList();
    // const isWishListed=isInWishList(product._id);
    const [selectedColor, setSelectedColor] = useState(product.color[0]);
    const [selectedSize, setSelectedSize] = useState(product.size[0]);

    return (
        <div>
            <div className="product-info-panel">
                <button
                    className="favourite-button-trans"
                    onClick={onAddToFavorite}
                >
                    <img src={hurt} />
                </button>
                <div className="onemorepanel">
                    <div className="product-title-price-page3">
                        <h1 className="product-title-page3">{product.name}</h1>
                        <p className="product-price-page3">${product.price}</p>
                    </div>
                    <p className="IncludeTax">MRP incl. of all taxes</p>
                    <p className="product-description-page3">{product.description}</p>

                    <ColorSelector
                        colors={product.colors}
                        selectedColor={selectedColor}
                        onSelectColor={setSelectedColor}
                    />

                    <div className="size-selection">
                        <p className="section-label">Size</p>
                        <SizeSelector sizes={product.size} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                        <div className="size-links">
                            <a href="#">FIND YOUR SIZE </a>
                            <span>|</span>
                            <a href="#"> MEASUREMENT GUIDE</a>
                        </div>
                    </div>
                    <AddToCartButton product={product}
                        selectedColor={selectedColor}
                        selectedSize={selectedSize}
                        selectedImage={selectedImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;