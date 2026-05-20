import React, { useState } from "react";

const SizeSelector = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
      <div className="size-selector">
          <div className="size-buttons">
              {sizes.map((s, i) => (
                  <button
                      key={i}
                      className={`size-btn ${selectedSize === s ? "selected" : ""}`}
                      onClick={() => setSelectedSize(s)}
                  >
                      {s}
                  </button>
              ))}
          </div>
      </div>
  );
};

export default SizeSelector;
