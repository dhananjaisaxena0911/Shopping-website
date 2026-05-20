import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../componenets/ProjectDetailPageComp/ProductGallery.jsx";
import ProductInfo from "../componenets/ProjectDetailPageComp/ProductInfo.jsx";
import "../styles/ProductDetailPage.css";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const handleAddToFavourite = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/favourite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gifts: [{ productId: product._id, selectedImage: selectedImage }] }),
      });
      if (res.ok) {
        alert("Added to Favourites");
        // Optional: trigger refresh on CartPage if needed
      } else {
        alert("Failed To add to Favourites");
      }
    } catch (err) {
      console.error("Error ", err);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data.images?.[0]);
    };
    fetchProduct();
  }, [id]);
  if (!product) return <div>Loading....</div>

  return (
    <div className="product-detail-container">
      <ProductGallery images={product.images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <ProductInfo
        product={product}
        selectedImage={selectedImage}
        onAddToFavorite={handleAddToFavourite}
      />
    </div>
  );


};



export default ProductDetailPage;