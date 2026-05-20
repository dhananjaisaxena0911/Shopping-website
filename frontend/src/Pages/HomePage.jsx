import React, { useState } from "react";
import CategorySearch from "../componenets/CategorySearch";
import NewCollectionSec from "../componenets/NewCollectiontext.jsx";
import ShopPagination from "../componenets/ShopPagination.jsx";
import NewCollectionProducts from "../componenets/NewCollection.jsx";
import NewThisWeek from "../componenets/NewThisWeekComponenet.jsx";
import XIVCollection from "../componenets/XIVCollection.jsx";
import ApproachToFashion from "../componenets/ApproachToFashion.jsx";
import "../styles/homePage.css";
const HomePage=()=>{
    const[currentIndex,setCurrentIndex]=useState(0);

    const handleNext=()=>setCurrentIndex(prev=>prev+2);
    const handlePrev=()=>setCurrentIndex(prev=>Math.max(0,prev-2));
    return(
        <div className="homepage">
            <CategorySearch></CategorySearch>
            <NewCollectionSec></NewCollectionSec>
            <NewCollectionProducts currentIndex={currentIndex}/>
            <ShopPagination onNext={handleNext} onPrev={handlePrev} />
            <NewThisWeek></NewThisWeek>
            <XIVCollection></XIVCollection>
            <ApproachToFashion></ApproachToFashion>
        </div>
    );
};
export default HomePage;