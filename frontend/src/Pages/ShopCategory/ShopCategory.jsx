import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
        <div className="shopcategory-showmore">
          <p className="shopcategory-showmore-results">
            Showing <b>1-12</b> of {props.category}.total results
          </p>
          <div className="shopcategory-showmore-button">
            <p>
              Show More <FontAwesomeIcon icon={faChevronDown} size="2xs" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
