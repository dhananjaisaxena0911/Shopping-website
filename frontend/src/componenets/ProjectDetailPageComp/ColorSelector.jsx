import React, { useState } from "react";

const ColorSelector=({colors=[],selectedColor,onSelectColor})=>{
    const[localSelected,setLocalSelected]=useState(selectedColor||colors[0]);
    const handleSelect=(color)=>{
        setLocalSelected(color);
        onSelectColor && onSelectColor(color)
    };
    return(
        <div className="color-section">
        <p>Color</p>
        <div className="color-boxes" style={{ display: "flex", gap: "8px" }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`hcolor-box ${localSelected === color ? "selected" : ""}`}
                    style={{
                        backgroundColor: color,
                        width: "35px",
                        height: "35px",
                        border: localSelected === color ? "2px solid black" : "1px solid #ccc",
                        cursor: "pointer",
                    }}
                    onClick={() => handleSelect(color)}
                />
            ))}
        </div>
    </div>
);
    
};

export default ColorSelector