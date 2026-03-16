import products from "../../Assets/products/product_data.js";
import { ItemList } from "../Items/ItemList/ItemList";
import "./Related.css";

export const Related = ({ tags, category }) => {
  const relatedProducts = products.filter((product) =>
    product.tags.some((tag) => tags.includes(tag) && tag !== "popular") &&
    product.category === category
  ).slice(0, 4); // Limit to a maximum of 5 items

  return (
    <div className="related">
      <div className="related-items-parent">
        <h2>Other items like this one</h2>
        <div className="related-items">
          <ItemList products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
