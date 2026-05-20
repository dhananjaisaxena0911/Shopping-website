import React, { useEffect, useState } from "react";
import { useCart } from "../componenets/CartContext/CartContext.jsx";
import { useNavigate ,useLocation } from "react-router-dom";
import CartItem from "../componenets/CartPageComp/CartItem.jsx";
import CartSummary from "../componenets/CartPageComp/CartSummary.jsx";
import FavouriteItem from "../componenets/FavouritePageComp/FavouriteItem.jsx";
import "../styles/CartPageStyle/CartPage.css";

const CartPage = () => {
    const location=useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.showFavourites ? "favourites" : "cart");
    const { cartItems } = useCart();
    const [favourites, setFavourites] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (activeTab === "favourites") {
            fetch("http://localhost:5000/api/favourite")
                .then((res) => res.json())
                .then((data) => {
                    const flattened = (data.gifts || []).map(g => g.productId); // Extract actual product data
                    setFavourites(flattened);
                })
                .catch((err) => console.error("Error fetching favourites", err));
        }
    }, [activeTab]);

    const subTotal = Math.round(
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
    ) / 100;
    const shipping = 10;

    const handleContinue = () => {
        navigate("/checkout");
    };

    return (
        <div className="cart-page">
            <div className="cart-header">
                <div
                    className="Links-for-Carts-favourites"
                    style={{ display: "flex", gap: "39px", marginBottom: "26px" }}
                >
                    <button
                        style={{
                            border: "none",
                            fontWeight: activeTab === "cart" ? "bold" : "normal",
                            fontSize: "16px",
                            cursor: "pointer",
                            backgroundColor: "transparent"
                        }}
                        onClick={() => setActiveTab("cart")}
                    >
                        SHOPPING BAG
                    </button>
                    <button
                        style={{
                            border: "none",
                            fontWeight: activeTab === "favourites" ? "bold" : "normal",
                            fontSize: "16px",
                            cursor: "pointer",
                            backgroundColor: "transparent"
                        }}
                        onClick={() => setActiveTab("favourites")}
                    >
                        FAVOURITES
                    </button>
                </div>
                <hr />
            </div>

            <div className="cart-content">
                <div className="cart-left">
                    {activeTab === "cart" ? (
                        <>
                            <div className="cart-items">
                                {cartItems.length === 0 ? (
                                    <p>Your shopping bag is empty.</p>
                                ) : (
                                    cartItems.map((item, idx) => (
                                        <CartItem key={idx} item={item} />
                                    ))
                                )}
                            </div>
                            <hr />
                        </>
                    ) : (
                        <>
                            <div className="favourite-items">
                                {favourites.length === 0 ? (
                                    <p>No favourite items found.</p>
                                ) : (
                                    favourites.map(item => (
                                        <FavouriteItem key={item._id} item={item} />
                                    ))

                                )}
                            </div>
                            <hr />
                        </>
                    )}
                </div>

                {activeTab === "cart" && (
                    <div className="cart-right">
                        <CartSummary subTotal={subTotal} shipping={shipping} onContinue={handleContinue} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
