import { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faHeart as faHeart_solid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeart_regular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./CartItems.css";

export const CartItems = () => {
  const {
    products,
    cart,
    addCart,
    removeCart,
    removeAllCart,
    toggleFavorite,
    isFavorite,
  } = useContext(ShopContext);
  const cartEmpty = cart.length === 0;

  // Calculate the discount percentage for each item individually
  const calculateDiscountPercentage = (price, price_previous) => {
    return (((price_previous - price) / price_previous) * 100).toFixed(0);
  };

  return (
    <div className="cartitems">
      <h1>My Cart</h1>
      {cart.map((order) => {
        const product = products.find((p) => p.id === order.productId);
        if (!product) return null;
        return (
            <div className="cartitems-list" key={`${order.productId}-${order.color}-${order.size}`}>
              <div className="cartitems-item">
                <div className="cartitems-item-left">
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    {/* TODO - remove gap under this (hard coded bottom:0.3rem for Link(a) ) */}
                    <img
                      className="cartitems-item-left-image"
                      src={product.images[0]}
                      alt=""
                    />
                    {product.price < product.price_previous && (
                      <div className="cartitems-item-left-reduced">
                        <div className="cartitems-item-left-reduced-content">
                          -
                          {calculateDiscountPercentage(
                            product.price,
                            product.price_previous
                          )}
                          %
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
                <div className="cartitems-item-right">
                  <div className="cartitems-item-right-heading">
                    <p className="cartitems-item-right-title">
                      <Link
                        to={`/products/${product.id}`}
                        className="cartitems-item-right-link"
                      >
                        {product.title}
                      </Link>
                    </p>
                  </div>
                  <div className="cartitems-item-right-info">
                    <p className="cartitems-item-right-size">
                      <b>Size:</b> {order.size}
                    </p>
                    <p className="cartitems-item-right-color">
                      <b>Color:</b> {order.color}
                    </p>
                  </div>
                  <div className="cartitems-item-right-calculations">
                    <div className="cartitems-item-right-cost">
                      <p className="cartitems-item-right-quantity">
                        {order.quantity}
                      </p>
                      <p>x</p>
                      <p
                        className={`cartitems-item-price ${
                          product.price_previous ? "is-reduced" : ""
                        }`}
                      >
                        &euro;{product.price}
                      </p>
                      {product.price_previous && (
                        <p className="cartitems-item-price-old">
                          &euro;{product.price_previous}
                        </p>
                      )}
                      <p>=</p>
                      <p className="cartitems-item-right-total">
                        &euro;{(product.price * order.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="cartitems-right-actions">
                      <div className="cartiems-right-actions-left">
                        <button
                          className="cartitems-item-right-remove"
                          onClick={() => {
                            removeCart(order.productId, order.color, order.size);
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                          className="cartitems-item-right-add"
                          onClick={() => {
                            addCart(order.productId, order.color, order.size);
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div className="cartitems-right-actions-right">
                        <button
                          onClick={() => {
                            toggleFavorite(product.id);
                          }}
                          className={`cartitems-item-right-favourite ${
                            isFavorite(product.id)
                              ? "in-favorites"
                              : "not-in-favorites"
                          }`}
                        >
                          {isFavorite(product.id) ? (
                            <FontAwesomeIcon icon={faHeart_solid} />
                          ) : (
                            <FontAwesomeIcon icon={faHeart_regular} />
                          )}
                        </button>
                        <button
                          className="cartitems-item-right-delete"
                          onClick={() => {
                            removeAllCart(order.productId, order.color, order.size);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}

      {cartEmpty && <p className="cartitems-message">No items in cart</p>}
    </div>
  );
};
