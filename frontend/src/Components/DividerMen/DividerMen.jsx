import React from "react";
import image_model from "../../Assets/image_divider_man.png";
import { Link } from "react-router-dom";
import "./DividerMen.css";

export const DividerMen = () => {
  return (
    <div className="divider-men">
      <div className="shape-m m1"></div>
      <div className="shape-m m2"></div>
      <div className="shape-m-opaque m3"></div>
      <div className="shape-m m4"></div>
      <div className="shape-m m5"></div>
      <div className="shape-m m6"></div>
      <div className="shape-m m7"></div>

      <div className="divider-men-image">
        <div className="model-mask">
          <img src={image_model} alt="Men's fashion model" />
        </div>
      </div>

      <div className="divider-men-content">
        <h2>Explore Trending Collections</h2>
        <p>
          Find the latest styles in men’s fashion — modern, bold, and
          comfortable.
        </p>
        <Link to="/men" className="divider-men-button">
          Shop Men Now
        </Link>
      </div>
    </div>
  );
};
