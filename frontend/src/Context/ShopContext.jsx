import { createContext, useState } from "react";
import products from "../Assets/products/product_data";
import reviews from "../Assets/reviews/reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faStarHalfStroke as faStarHalf
} from "@fortawesome/free-solid-svg-icons";

export const ShopContext = createContext(null);

const getCart = () => {
  return [];
};

const getFavorites = () => {
  return [];
};

const ShopContextProvider = (props) => {
  // Popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const togglePopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  // Cart
  const [cart, setCart] = useState(getCart());
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  const isInCart = (productId) => {
    return cart.some((item) => item.productId === productId);
  };
  const countInCart = (productId) => {
    return cart
      .filter((item) => item.productId === productId)
      .reduce((sum, item) => sum + item.quantity, 0);
  };
  const addCart = (productId, color, size) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) =>
          item.productId === productId &&
          item.color === color &&
          item.size === size
      );
      if (index >= 0) {
        const updated = [...prevCart];
        updated[index] = { ...updated[index], quantity: updated[index].quantity + 1 };
        return updated;
      }
      return [...prevCart, { productId, color, size, quantity: 1 }];
    });
    togglePopup("Added to cart!");
  };
  const removeCart = (productId, color, size) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) =>
          item.productId === productId &&
          item.color === color &&
          item.size === size
      );
      if (index < 0) return prevCart;
      const item = prevCart[index];
      if (item.quantity <= 1) {
        return prevCart.filter((_, i) => i !== index);
      }
      const updated = [...prevCart];
      updated[index] = { ...updated[index], quantity: updated[index].quantity - 1 };
      return updated;
    });
    togglePopup("Removed from cart!");
  };
  const removeAllCart = (productId, color, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.color === color &&
            item.size === size
          )
      )
    );
    togglePopup("Removed all from cart!");
  };

  // Favorites
  const [favorites, setFavorites] = useState(getFavorites());
  const getFavoriteCount = () => {
    return favorites.length;
  };
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };
  const addFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set([...prevFavorites, productId]);
      return Array.from(updatedFavorites);
    });
    togglePopup("Added to favorites!");
  };
  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== productId)
    );
    togglePopup("Removed from favorites!");
  };
  const toggleFavorite = (productId) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  const getReviewInfo = (productId) => {
    const productReviews = reviews.filter((review) => review.productId === productId);
    const reviewCount = productReviews.length;
    
    // Calculate average rating only if there are reviews
    let reviewAverageRating = 0;
    if (reviewCount > 0) {
      const totalRating = productReviews.reduce((acc, review) => acc + review.rating, 0);
      reviewAverageRating = (totalRating / reviewCount).toFixed(1);
    }
    
    return { reviewCount, reviewAverageRating };
  };

  // Function to render stars based on a rating
  const renderStars = (rating, baseClassName) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className={`${baseClassName}-full`} />
      );
    }
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} className={`${baseClassName}-half`} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`empty-${i}`} icon={faStarSolid} className={`${baseClassName}-empty`} />
      );
    }
    return stars;
  };
  
  // Export the context and provider
  const contextValue = {
      products,
      reviews,
      popupMessage,
      cart,
      getCartCount,
      isInCart,
      countInCart,
      addCart,
      removeCart,
      removeAllCart,
      favorites,
      getFavoriteCount,
      isFavorite,
      toggleFavorite,
      getReviewInfo,
      renderStars,
      showPopup,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
