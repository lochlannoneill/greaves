import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { BannerCategory } from "../../Components/BannerCategory/BannerCategory";
import { ItemList } from "../../Components/ItemList/ItemList";
import "./ShopCategory.css";

export const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shopcategory">
      {/* <div className="shopcategory-left">
        <Filters />
      </div> */}
      <div className="shopcategory-right">
        <div className="shopcategory-banner">
          <BannerCategory category={props.category} />
        </div>
        <div className="shopcateogry-items">
          <ItemList products={products} category={props.category} />
        </div>
      </div>
    </div>
  );
};
