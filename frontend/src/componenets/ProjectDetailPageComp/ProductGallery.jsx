import React from "react";
const ProductGallery = ({ images, selectedImage, setSelectedImage }) => {
    return (
        <div className="gallery">
            <div className="main-image">
                {selectedImage && (
                    <img src={`http://localhost:5000${selectedImage}`} alt="Selected" />
                 )}
                {/*Favorite Button*/}
               

            </div>
            <div className="thumbnails">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={`http://localhost:5000${img}`}
                        alt={`thumb-${idx}`}
                        className={`thumbnail ${img === selectedImage ? "active" : ""}`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>

        </div>
    );
};
export default ProductGallery;