import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faHeart as faHeart_solid,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import { useInView } from "../../Hooks/useInView";
import "./Item.css";

const maxTitleChars = 48;
const truncateTitle = (title) => {
  if (title.length > maxTitleChars) {
    return title.substring(0, maxTitleChars) + "...";
  }
  return title;
};

// Helper to split price into whole + decimals
const formatPrice = (price) => {
  const [whole, decimals] = Number(price).toFixed(2).split(".");
  return { whole, decimals };
};

export const Item = (props) => {
  const { isFavorite, isInCart, countInCart, reviews, getReviewInfo } =
    useContext(ShopContext);

  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverageRating, setReviewAverageRating] = useState(0);
  const [hoverImage, setHoverImage] = useState(
    props.images && props.images.length > 0 ? props.images[0] : ""
  );
  const [isImageHovered, setIsImageHovered] = useState(false);

  // ref for the horizontal thumbnail scroller
  const listWrapperRef = useRef(null);

  const { ref, isVisible } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (reviews) {
      const { reviewCount, reviewAverageRating } = getReviewInfo(props.id);
      setReviewCount(reviewCount);
      setReviewAverageRating(reviewAverageRating);
    }
  }, [reviews, props.id, getReviewInfo]);

  useEffect(() => {
    if (props.images && props.images.length > 0) {
      setHoverImage(props.images[0]);
    }
  }, [props.images]);

  // Auto-rotate images while hovered
  useEffect(() => {
    if (!isImageHovered || !props.images || props.images.length === 0) return;

    // Limit auto-scroll to the "expanded" threshold (index 3)
    const maxIndex = Math.min(props.images.length - 1, 3);
    if (maxIndex <= 0) return; // nothing to rotate

    const interval = setInterval(() => {
      setHoverImage((current) => {
        const idx = props.images.indexOf(current);

        // If current is outside the allowed range or not found, reset to 0
        const safeIdx = idx < 0 || idx > maxIndex ? 0 : idx;

        const nextIndex = safeIdx === maxIndex ? 0 : safeIdx + 1;
        return props.images[nextIndex];
      });
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [isImageHovered, props.images]);

  // Keep active thumbnail centered when list overflows
  useEffect(() => {
    if (!listWrapperRef.current) return;

    const wrapper = listWrapperRef.current;
    const activeThumb = wrapper.querySelector(
      ".item-thumb.active, .item-thumb-expand.active"
    );

    if (!activeThumb) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const thumbRect = activeThumb.getBoundingClientRect();

    const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
    const thumbCenter = thumbRect.left + thumbRect.width / 2;

    const delta = thumbCenter - wrapperCenter;

    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    let targetScrollLeft = wrapper.scrollLeft + delta;

    if (targetScrollLeft < 0) targetScrollLeft = 0;
    if (targetScrollLeft > maxScroll) targetScrollLeft = maxScroll;

    wrapper.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [hoverImage, props.images]);

  const calculateDiscountPercentage = (price, price_previous) => {
    return (((price_previous - price) / price_previous) * 100).toFixed(0);
  };

  // stagger delay based on index (80ms per card)
  const rawDelay = (props.index ?? 0) * 80;
  const staggerDelay = isVisible ? `${Math.min(rawDelay, 300)}ms` : "0ms";

  const favourite = isFavorite(props.id);
  const inCart = isInCart(props.id);
  const cartCount = countInCart(props.id);

  const totalStock = props.stock
    ? Object.values(props.stock).reduce(
        (acc, colorStock) =>
          acc + Object.values(colorStock).reduce((a, b) => a + b, 0),
        0
      )
    : null;
  const isOutOfStock = totalStock === 0;

  // Format prices
  const currentPrice = formatPrice(props.price);
  const previousPrice = props.price_previous
    ? formatPrice(props.price_previous)
    : null;

  return (
    <div
      ref={ref}
      className={`item ${isVisible ? "item--visible" : ""}${isOutOfStock ? " item--out-of-stock" : ""}`}
      style={{ transitionDelay: staggerDelay }}
    >
      {(favourite || inCart) && (
        <div className="item-status-floating">
          {favourite && (
            <div className="item-favourite-container">
              <FontAwesomeIcon
                className={`item-favourite ${favourite ? "isFavorite" : ""}`}
                icon={faHeart_solid}
              />
            </div>
          )}

          {inCart && (
            <div className="item-cart-container">
              <FontAwesomeIcon
                className={`item-cart ${inCart ? "isInCart" : ""}`}
                icon={faCartShopping_solid}
              />
              {cartCount > 1 && (
                <span className="item-cart-count">{cartCount}</span>
              )}
            </div>
          )}
        </div>
      )}

      <Link to={`/products/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div
          className="item-image-container"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => {
            setIsImageHovered(false);
            if (props.images && props.images.length > 0) {
              setHoverImage(props.images[0]);
            }
          }}
        >
          {isOutOfStock && (
            <div className="item-out-of-stock-overlay">
              <span>Out of stock</span>
            </div>
          )}
          {/* Only render the image when visible */}
          {isVisible && (
            <img className="item-image" src={hoverImage} alt={props.title} />
          )}

          {/* Overlay that appears on hover */}
          <div className="item-hover-overlay">
            {/* Thumbnails */}
            <div className="item-image-list-wrapper" ref={listWrapperRef}>
              <div className="item-image-list">
                {props.images.slice(0, 3).map((img, index) => {
                  const isActive = hoverImage === img;

                  return (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className={`item-thumb ${isActive ? "active" : ""}`}
                      onMouseEnter={() => setHoverImage(img)}
                    />
                  );
                })}

                {props.images.length > 3 && (
                  <div
                    className={
                      "item-images-expand" +
                      (hoverImage === props.images[3] ? " is-active" : "")
                    }
                    onMouseEnter={() => setHoverImage(props.images[3])}
                  >
                    <span className="item-images-expand-icon">
                      +{props.images.length - 3}
                    </span>
                    <img
                      src={props.images[3]}
                      alt=""
                      className={`item-thumb item-thumb-expand ${
                        hoverImage === props.images[3] ? "active" : ""
                      }`}
                    />
                  </div>
                )}
              </div>
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

        <div className="item-content">
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
          </div>

          {/* Bottom-anchored bar (prices only now) */}
          <div className="item-footer">
            <div className="item-prices">
              <div
                className={`item-price ${
                  props.price_previous ? "reduced" : ""
                }`}
              >
                <span className="price-euro">&euro;</span>
                <span className="price-whole">{currentPrice.whole}</span>
                <span className="price-decimals">
                  {currentPrice.decimals}
                </span>
              </div>
              {previousPrice && (
                <div className="item-price-old">
                  <span className="price-whole-old">{previousPrice.whole}</span>
                  <span className="price-decimals-old">
                    {previousPrice.decimals}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
