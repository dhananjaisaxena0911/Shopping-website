import React from "react";
import "../styles/ApproachToFashion.css"
import model1 from "../assets/assets/model-1.jpg";
import model2 from "../assets/assets/model-2.jpg";
import model3 from "../assets/assets/model-3.jpg";
import model4 from "../assets/assets/model-4.jpg";

const ApproachToFashion = () => {
    return (
        <div className="approach-wrapper">
            <div className="text-section">
                <h2>OUR APPROACH TO FASHION DESIGN</h2>
                <p>
                    at elegant vogue , we blend creativity with craftsmanship to create
                    fashion that transcends trends and stands the test of time each
                    design is meticulously crafted, ensuring the highest quailty
                    exqusite finish
                </p>
            </div>
            <div className="image-sectionApproach">
                <img src={model1}></img>
                <img src={model2}></img>
                <img src={model3}></img>
                <img src={model4}></img>
            </div>
        </div>
    );
};
export default ApproachToFashion;