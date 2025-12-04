import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faHeart as faHeart_solid,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import "./Item.css";

const maxTitleChars = 48;
const truncateTitle = (title) => {
  if (title.length > maxTitleChars) {
    return title.substring(0, maxTitleChars) + "...";
  }
  return title;
};

export const Item = (props) => {
  const { isFavorite, isInCart, countInCart, reviews, getReviewInfo } =
    useContext(ShopContext);

  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverageRating, setReviewAverageRating] = useState(0);

  const [hoverImage, setHoverImage] = useState(props.images[0]);

  useEffect(() => {
    if (reviews) {
      const { reviewCount, reviewAverageRating } = getReviewInfo(props.id);
      setReviewCount(reviewCount);
      setReviewAverageRating(reviewAverageRating);
    }
  }, [reviews, props.id, getReviewInfo]);

  // keep hoverImage in sync if the product images change
  useEffect(() => {
    if (props.images && props.images.length > 0) {
      setHoverImage(props.images[0]);
    }
  }, [props.images]);

  // Calculate the discount percentage for each item individually
  const calculateDiscountPercentage = (price, price_previous) => {
    return (((price_previous - price) / price_previous) * 100).toFixed(0);
  };

  return (
    <div className="item">
      <Link to={`/products/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image-container">
          {/* main image uses hoverImage */}
          <img className="item-image" src={hoverImage} alt={props.title} />

          {/* Overlay that appears on hover */}
          <div
            className="item-hover-overlay"
            // when leaving the overlay, reset back to first image
            onMouseLeave={() =>
              props.images && props.images.length > 0
                ? setHoverImage(props.images[0])
                : null
            }
          >
            {/* Left column: image list */}
            <div className="item-image-list">
              {props.images.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="item-thumb"
                  onMouseEnter={() => setHoverImage(img)}
                />
              ))}

              {props.images.length > 3 && (
                <div
                  className="item-images-expand"
                  onMouseEnter={() => setHoverImage(props.images[3])}
                >
                  <span className="item-images-expand-icon">
                    +{props.images.length - 3}
                  </span>
                  <img
                    src={props.images[3]}
                    alt=""
                    className="item-thumb item-thumb-expand"
                  />
                </div>
              )}
            </div>
          </div>

          {props.price < props.price_previous && (
            <div className="item-reduced">
              <div className="item-reduced-content">
                {calculateDiscountPercentage(
                  props.price,
                  props.price_previous
                )}
                % REDUCED
              </div>
            </div>
          )}
        </div>

        <div className="item-description">
          <p className="item-description-title">
            {truncateTitle(props.title)}
          </p>

          {reviewCount > 0 && (
            <div className="item-description-reviews">
              <span className="item-description-reviews-stars">
                {[...Array(Math.floor(reviewAverageRating))].map(
                  (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="item-description-reviews-star-solid"
                      icon={faStar_solid}
                    />
                  )
                )}
                {reviewAverageRating % 1 !== 0 && (
                  <FontAwesomeIcon
                    className="item-description-reviews-star-half"
                    icon={faStar_half}
                  />
                )}
                {[
                  ...Array(Math.max(0, 5 - Math.ceil(reviewAverageRating))),
                ].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className="item-description-reviews-star-empty"
                    icon={faStar_solid}
                  />
                ))}
              </span>
              <p className="item-description-reviews-text">
                {reviewCount} reviews
              </p>
            </div>
          )}

          <div className="item-stuff">
            <div className="item-prices">
              <div
                className={`item-price ${
                  props.price_previous ? "reduced" : ""
                }`}
              >
                &euro;{props.price}
              </div>
              {props.price_previous && (
                <div className="item-price-old">
                  &euro;{props.price_previous}
                </div>
              )}
            </div>

            <div className="item-status">
              {isFavorite(props.id) ? (
                <FontAwesomeIcon
                  className={`item-favourite ${
                    isFavorite(props.id) ? "isFavorite" : ""
                  }`}
                  icon={faHeart_solid}
                />
              ) : null}

              {isInCart(props.id) ? (
                <div className="item-cart-container">
                  <FontAwesomeIcon
                    className={`item-cart ${
                      isInCart(props.id) ? "isInCart" : ""
                    }`}
                    icon={faCartShopping_solid}
                  />
                  {countInCart(props.id) > 1 && (
                    <span className="item-cart-count">
                      {countInCart(props.id)}
                    </span>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
