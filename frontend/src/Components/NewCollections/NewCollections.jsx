import React from "react";
import products from "../../Assets/products/product_data";
import { ItemList } from "../ItemList/ItemList";
import "./NewCollections.css";

export const NewCollections = () => {
  // Filter products for new collections
  const newCollectionsProducts = products.filter(
    (product) => product.tags?.includes("new")
  );

  // Helper: get 8 random items
  const getRandomEight = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, 10);
  };

  return (
    <div className="new-collections">
      <div className="collections-parent">
        <div className="collections">
          <div className="collections-category">
            <div className="collections-list">
              <ItemList products={getRandomEight(newCollectionsProducts)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
