import React, { useContext, useEffect, useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeart_solid,
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeart_regular } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "../Modal/Modal";
import "./ProductDisplay.css";

// Helper to split price into whole + decimals
const formatPrice = (price) => {
  const [whole, decimals] = Number(price).toFixed(2).split(".");
  return { whole, decimals };
};

export const ProductDisplay = (props) => {
  const { product, reviewAverageRating, reviewCount } = props;
  const { cart, addCart, toggleFavorite, isFavorite, showPopup, popupMessage } =
    useContext(ShopContext);

  const totalStock = Object.values(product.stock).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  useEffect(() => {
    setSelectedImage(product.images[0]);
  }, [product]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format prices
  const currentPrice = formatPrice(product.price);
  const previousPrice = product.price_previous
    ? formatPrice(product.price_previous)
    : null;

  return (
    <div className="productdisplay">
      {showPopup && <Modal message={popupMessage} />}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product thumbnail ${index}`}
              onMouseEnter={() => setSelectedImage(image)}
              className={`thumbnail ${
                selectedImage === image ? "active" : ""
              }`}
            />
          ))}
          {product.images.length > 3 && (
            <div className="product-images-expand">
              <span className="product-images-expand-icon">
                +{product.images.length - 3}
              </span>
              <img src={product.images[3]} alt={`product-3`} />
            </div>
          )}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={selectedImage}
            alt="Main product"
          />
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
                    ...Array(Math.max(0, 5 - Math.ceil(reviewAverageRating))),
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
                <span className="price-whole-old">
                  {previousPrice.whole}
                </span>
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
                : totalStock < 5
                ? "low-stock"
                : ""
            }`}
          >
            <p>
              {totalStock === 0
                ? "Out of stock"
                : totalStock < 5
                ? `Only ${totalStock} left in stock!`
                : `${totalStock} left in stock`}
            </p>
          </div>
        </div>
        <div className="productdisplay-tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="productdisplay-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="productdisplay-right-about">
          <h3>About this item</h3>
          <p>{product.description}</p>
        </div>
        <div className="productdisplay-right-color">
          <h3>Select Colour</h3>
          <div className="productdisplay-right-colors">
            <div>White</div>
            <div>Black</div>
            <div>Blue</div>
            <div>Green</div>
            <div>Grey</div>
            <div>Red</div>
            <div>Yellow</div>
            <div>Purple</div>
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h3>Select Size</h3>
          <p>
            Still unsure what size to get?{" "}
            Find your <a href="/"> recommended size</a> or check out our{" "}
            <a href="/">size guide</a>.
          </p>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
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
              <FontAwesomeIcon icon={faHeart_solid} />
            ) : (
              <FontAwesomeIcon icon={faHeart_regular} />
            )}
          </button>
          <button
            onClick={() => {
              addCart(product.id);
            }}
            className="productdisplay-right-category-buttons-cart"
          >
            Add to Cart <FontAwesomeIcon icon={faCartShopping_solid} />
          </button>
        </div>
        {cart[product.id] > 0 && (
          <p className="productdisplay-right-already">
            {cart[product.id] === 1 ? "This item is" : `${cart[product.id]} x `}{" "}
            already in the cart
          </p>
        )}
      </div>
    </div>
  );
};
