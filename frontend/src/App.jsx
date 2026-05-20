import React from "react";
import ScrollToTop from "./componenets/ScrollToTop.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componenets/Navbar";
import HomePage from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Footer from "./componenets/Footer.jsx";
import { CartProvider } from "./componenets/CartContext/CartContext.jsx";
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import CartPage from "./Pages/CartPage.jsx";

import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import "./styles/mobile.css"
import "./app.css";
// import { WishListProvider } from "./componenets/WishListContext.jsx";
function App(){
  return(
    <div>
      {/* //<WishListProvider> */}
      <CartProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer/>
      </Router>
    
    </CartProvider>
      {/* </WishListProvider> */}
    </div>
  )
}
export default App;