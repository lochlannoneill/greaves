import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeart_solid,
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCartShopping as faCartShopping_solid,
  faExpand,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeart_regular } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "../Modal/Modal";
import ImageSlideshow from "../ImageSlideshow/ImageSlideshow";
import "./ProductDisplay.css";

// Helper to split price into whole + decimals
const formatPrice = (price) => {
  const [whole, decimals] = Number(price).toFixed(2).split(".");
  return { whole, decimals };
};

export const ProductDisplay = (props) => {
  const { product, reviewAverageRating, reviewCount } = props;
  const { cart, addCart, removeCart, toggleFavorite, isFavorite, showPopup, popupMessage } =
    useContext(ShopContext);

  const colors = Object.keys(product.stock);

  const totalStock = Object.values(product.stock).reduce(
    (acc, colorStock) =>
      acc + Object.values(colorStock).reduce((a, b) => a + b, 0),
    0
  );

  const sizes = [
    { label: "S", key: "small" },
    { label: "M", key: "medium" },
    { label: "L", key: "large" },
    { label: "XL", key: "xlarge" },
    { label: "XXL", key: "xxlarge" },
  ];

  const getDefaultSize = (color) => {
    if (!color || !product.stock[color]) return null;
    const firstInStock = sizes.find((s) => product.stock[color][s.key] > 0);
    return firstInStock ? firstInStock.label : null;
  };

  const defaultColor = totalStock > 0 && colors.length > 0 ? colors[0] : null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedSize, setSelectedSize] = useState(totalStock > 0 ? getDefaultSize(defaultColor) : null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const sizeObj = sizes.find((s) => s.label === selectedSize);
    if (!sizeObj || !product.stock[color] || product.stock[color][sizeObj.key] <= 0) {
      setSelectedSize(getDefaultSize(color));
    }
  };

  const [slideshowOpen, setSlideshowOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  // zoom state
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [zoomBoxPos, setZoomBoxPos] = useState({ top: 0, left: 0 });
  const [zoomBgSize, setZoomBgSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSelectedImage(product.images[0]);
    const newColors = Object.keys(product.stock);
    const newTotalStock = Object.values(product.stock).reduce(
      (acc, colorStock) =>
        acc + Object.values(colorStock).reduce((a, b) => a + b, 0),
      0
    );
    if (newTotalStock > 0) {
      const newDefaultColor = newColors.length > 0 ? newColors[0] : null;
      setSelectedColor(newDefaultColor);
      setSelectedSize(getDefaultSize(newDefaultColor));
    } else {
      setSelectedColor(null);
      setSelectedSize(null);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format prices
  const currentPrice = formatPrice(product.price);
  const previousPrice = product.price_previous
    ? formatPrice(product.price_previous)
    : null;

  // Helper: open slideshow at a given image index
  const openSlideshowAt = (index) => {
    if (!product.images || product.images.length === 0) return;
    setSlideshowIndex(index);
    setSlideshowOpen(true);
  };

  // handlers for zoom box
  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // cursor position relative to the image
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // percentage for background position
    const xPercent = (relX / rect.width) * 100;
    const yPercent = (relY / rect.height) * 100;

    setZoomCoords({
      x: Math.min(100, Math.max(0, xPercent)),
      y: Math.min(100, Math.max(0, yPercent)),
    });

    // 2x zoom relative to the main image size
    const ZOOM_LEVEL = 3;
    setZoomBgSize({
      width: rect.width * ZOOM_LEVEL,
      height: rect.height * ZOOM_LEVEL,
    });

    // pixel position for zoom box (follow cursor with a small offset)
    const offset = 20; // distance from cursor
    const boxWidth = 180; // approximate, matches your CSS-ish
    const boxHeight = 220;

    let left = relX + offset;
    let top = relY + offset;

    // basic clamping so it doesn’t fly totally off the image
    if (left + boxWidth > rect.width) {
      left = rect.width - boxWidth;
    }
    if (top + boxHeight > rect.height) {
      top = rect.height - boxHeight;
    }
    if (left < 0) left = 0;
    if (top < 0) top = 0;

    setZoomBoxPos({ top, left });
  };

  return (
    <>
      <div className="productdisplay">
        {showPopup && <Modal message={popupMessage} />}
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            {product.images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="productdisplay-thumbnail-wrapper"
                onMouseEnter={() => setSelectedImage(image)}
                onClick={() => openSlideshowAt(index)}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index}`}
                  className={`thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                />
                <FontAwesomeIcon
                  icon={faExpand}
                  className="thumbnail-zoom-icon"
                />
              </div>
            ))}

            {product.images.length > 3 && (
              <div
                className="product-images-expand"
                onClick={() => openSlideshowAt(3)} // start at 4th image
              >
                <span className="product-images-expand-icon">
                  +{product.images.length - 3}
                </span>

                <img src={product.images[3]} alt={`product-3`} />
              </div>
            )}
          </div>

          <div className="productdisplay-img">
            <div
              className="productdisplay-main-wrapper"
              onClick={() => {
                const idx = product.images.findIndex(
                  (img) => img === selectedImage
                );
                openSlideshowAt(idx === -1 ? 0 : idx);
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                key={selectedImage}
                className="productdisplay-main-img productdisplay-main-img--fade"
                src={selectedImage}
                alt="Main product"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="productdisplay-main-zoom-icon"
              />

              {isZoomed && (
                <div
                  className={`productdisplay-zoom-box ${
                    isZoomed ? "productdisplay-zoom-box--visible" : ""
                  }`}
                  style={{
                    top: `${zoomBoxPos.top}px`,
                    left: `${zoomBoxPos.left}px`,
                    backgroundImage: `url(${selectedImage})`,
                    backgroundPosition: `${zoomCoords.x}% ${zoomCoords.y}%`,
                    backgroundSize: `${zoomBgSize.width}px ${zoomBgSize.height}px`,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="productdisplay-right">
          <div className="productdisplay-right-heading">
            <h1 className="productdisplay-right-heading-title">
              {product.title}
              {isFavorite(product.id) ? (
                <span>
                  &nbsp;
                  <FontAwesomeIcon
                    className={`item-favourite ${
                      isFavorite(product.id) ? "isFavorite" : ""
                    }`}
                    icon={faHeart_solid}
                  />
                </span>
              ) : null}
            </h1>
            <div className="productdisplay-right-rating">
              {reviewCount > 0 ? (
                <>
                  <span className="productdisplay-right-rating-stars">
                    {[...Array(Math.floor(reviewAverageRating))].map(
                      (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          className="productdisplay-right-rating-full"
                          icon={faStar_solid}
                        />
                      )
                    )}
                    {reviewAverageRating % 1 !== 0 && (
                      <FontAwesomeIcon
                        className="productdisplay-right-rating-half"
                        icon={faStar_half}
                      />
                    )}
                    {[
                      ...Array(
                        Math.max(0, 5 - Math.ceil(reviewAverageRating))
                      ),
                    ].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        className="productdisplay-right-rating-empty"
                        icon={faStar_solid}
                      />
                    ))}
                  </span>
                  <a
                    className="productdisplay-right-rating-reviews"
                    href="#reviews"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("reviews").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {reviewCount} reviews
                  </a>
                </>
              ) : (
                <p className="productdisplay-right-rating-default">
                  No reviews yet
                </p>
              )}
            </div>
          </div>
          <div className="productdisplay-right-info">
            <div className="productdisplay-right-prices">
              <p
                className={`productdisplay-right-price ${
                  product.price_previous ? "reduced" : ""
                }`}
              >
                <span className="price-euro">&euro;</span>
                <span className="price-whole">{currentPrice.whole}</span>
                <span className="price-decimals">{currentPrice.decimals}</span>
              </p>
              {previousPrice && (
                <p className="productdisplay-right-price-old">
                  <span className="price-whole-old">{previousPrice.whole}</span>
                  <span className="price-decimals-old">
                    {previousPrice.decimals}
                  </span>
                </p>
              )}
            </div>
            <div
              className={`productdisplay-right-stock ${
                totalStock === 0
                  ? "out-of-stock"
                  : totalStock < 50
                  ? "low-stock"
                  : ""
              }`}
            >
              <p>
                {totalStock === 0
                  ? "Out of stock"
                  : totalStock < 50
                  ? `Only ${totalStock} left in stock!`
                  : `${totalStock} left in stock`}
              </p>
            </div>
          </div>
          <div className="productdisplay-right-tags-container">
            <div className="productdisplay-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="productdisplay-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="productdisplay-right-about">
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>
          <div className="productdisplay-right-color">
            <h3>Select Colour</h3>
            <div className="productdisplay-right-colors">
              {colors.map((color, index) => {
                const colorInStock = Object.values(product.stock[color]).some((v) => v > 0);
                return (
                  <div
                    key={index}
                    className={`${selectedColor === color ? "color-selected" : ""}${!colorInStock ? " color-out-of-stock" : ""}`}
                    onClick={() => colorInStock && handleColorChange(color)}
                  >
                    {color}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="productdisplay-right-size">
            <h3>Select Size</h3>
            <p>
              Still unsure what size to get? Find your{" "}
              <a href="/">recommended size</a> or check out our{" "}
              <a href="/">size guide</a>.
            </p>
            <div className="productdisplay-right-sizes">
              {sizes.map((size) => {
                const inStock = selectedColor && product.stock[selectedColor]
                  ? product.stock[selectedColor][size.key] > 0
                  : false;
                return (
                  <div
                    key={size.label}
                    className={`productdisplay-right-size-element${
                      selectedSize === size.label ? " size-selected" : ""
                    }${!inStock ? " size-out-of-stock" : ""}`}
                    onClick={() => inStock && setSelectedSize(size.label)}
                  >
                    {size.label}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="productdisplay-right-category-buttons">
            <button
              onClick={() => {
                toggleFavorite(product.id);
              }}
              className={`productdisplay-right-category-buttons-favourite ${
                isFavorite(product.id) ? "in-favorites" : "not-in-favorites"
              }`}
            >
              {isFavorite(product.id) ? (
                <>
                  <span>Remove from favourites</span>
                  <FontAwesomeIcon className="productdisplay-right-category-buttons-icon" icon={faHeart_solid} />
                </>
              ) : (
                <>
                  <span>Add to favourites</span>
                  <FontAwesomeIcon className="productdisplay-right-category-buttons-icon" icon={faHeart_regular} />
                </>
              )}
            </button>
            <button
              onClick={() => {
                addCart(product.id);
              }}
              className="productdisplay-right-category-buttons-cart"
            >
              <span>Add to Cart</span>
              <FontAwesomeIcon icon={faCartShopping_solid} />
            </button>
          </div>
            {cart[product.id] > 0 && (
              <div className="productdisplay-right-cart-status">
                <p className="productdisplay-right-already">
                  {cart[product.id] === 1
                    ? "This item is"
                    : `${cart[product.id]} `}{" "}
                  already in the cart
                </p>

              <span
                  className="productdisplay-right-remove"
                  onClick={() => removeCart(product.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && removeCart(product.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} /> Remove 1
                </span>
              </div>
            )}
        </div>
      </div>

      <ImageSlideshow
        images={product.images}
        startIndex={slideshowIndex}
        isOpen={slideshowOpen}
        onClose={() => setSlideshowOpen(false)}
      />
    </>
  );
};
