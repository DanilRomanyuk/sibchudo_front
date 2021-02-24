import React from "react";// import CatSlider from "./CatSlider/CatSlider";
import AbstractPage from "../AbstractPage/AbstractPage";
import AboutCatsText from "./AboutCatsText"
export const AboutCats = () => {
    return (
            <div>
            <AbstractPage children={<AboutCatsText/>} />    
            </div>
    )
}

