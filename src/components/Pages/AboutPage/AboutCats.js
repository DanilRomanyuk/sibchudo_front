import React from "react";// import CatSlider from "./CatSlider/CatSlider";
import AbstractPage from "../AbstractPage/AbstractPage";
import AboutCatsText from "./AboutCatsText"




let AboutCats = () => {
    return (
            <div>
            <AbstractPage children={<AboutCatsText/>} />
                   
            </div>
    )
}
export default AboutCats;
