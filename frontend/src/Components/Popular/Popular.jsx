import React from "react";
import products from "../../Assets/products/product_data.js";
import { DividerWomen } from "../DividerWomen/DividerWomen.jsx";
import { DividerMen } from "../DividerMen/DividerMen.jsx";
import { ItemList } from "../ItemList/ItemList";
import "./Popular.css";

export const Popular = () => {
  // Filter popular products for women and men
  const popularWomenProducts = products.filter(
    (product) =>
      product.tags?.includes("popular") && product.category === "women"
  );

  const popularMenProducts = products.filter(
    (product) =>
      product.tags?.includes("popular") && product.category === "men"
  );
  

  // Helper: pick 4 random items
  const getRandomFour = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, 4);
  };

  return (
    <div className="popular">
      <div className="popular-category popular-women">
        <DividerWomen />
        <div className="popular-list">
          <ItemList products={getRandomFour(popularWomenProducts)} />
        </div>
      </div>

      <div className="popular-category popular-men">
        <DividerMen />
        <div className="popular-list">
          <ItemList products={getRandomFour(popularMenProducts)} />
        </div>
      </div>
    </div>
  );
};
