import React from "react";

import hero_image from "../component/assets/photos/hero_image.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="new-text">
        <b>NEW ARRIVALS ONLY</b>
      </div>
      

        <img src={hero_image} alt="" className="hero-img" />
    
    </div>
  );
};

export default Hero;
