import React from "react";
import image_model from "../../Assets/image_divider_woman.png";
import { Link } from "react-router-dom";
import "./DividerWomen.css";

export const DividerWomen = () => {
  return (
    <div className="divider-women">

    <div className="shape s1"></div>
    <div className="shape s2"></div>
    <div className="shape s3"></div>
    <div className="shape s4"></div>
    <div className="shape s5"></div>
    <div className="shape-opaque s6"></div>
    <div className="shape s7"></div>
    <div className="shape s8"></div>

    <div className="divider-women-content">
        <h2>Popular Amongst Women</h2>
        <p>Discover the latest trends in women’s fashion, curated for style and comfort.</p>
        <Link to="/women" className="divider-women-button">Shop Women</Link>
    </div>

    <div className="divider-women-image">
        <div className="model-mask">
            <img src={image_model} alt="Women's fashion model" />
        </div>
    </div>

    </div>
  );
};