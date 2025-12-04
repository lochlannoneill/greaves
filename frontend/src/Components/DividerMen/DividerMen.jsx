// DividerMen.jsx
import React from "react";
import image_model from "../../Assets/image_divider_man.png";
import { Link } from "react-router-dom";
import "./DividerMen.css";
import { useInView } from "../../Hooks/useInView";

export const DividerMen = () => {
  const { ref, isVisible } = useInView({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`divider-men ${isVisible ? "divider-men--visible" : ""}`}
    >
      <div className="divider-men-info">
        <div className="divider-men-image">
          <div className="model-mask">
            <img src={image_model} alt="Men's fashion model" />
          </div>
        </div>
        <div className="divider-men-content">
          <h2>Explore Trending Collections</h2>
          <p>Find the latest styles in men’s fashion — modern, bold, and comfortable.</p>
          <Link to="/men" className="divider-men-button">
            Shop Now
          </Link>
        </div>
      {/* shapes ... */}
        <div className="shape-m m1"></div>
        <div className="shape-m m2"></div>
        <div className="shape-m m3"></div>
        <div className="shape-m m4"></div>
        <div className="shape-m m5"></div>
        <div className="shape-m m6"></div>
        <div className="shape-m m7"></div>

      </div>
    </div>
  );
};
