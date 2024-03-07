import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStar_solid, faCartShopping as faCartShopping_solid, faHeart as faHeart_solid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar_regular } from '@fortawesome/free-regular-svg-icons';
import './ProductDisplay.css'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="Main product image" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-rating">
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_regular} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_regular} />
            </div>
            <p>{product.description}</p>
            <div className="productdisplay-right-prices">
                <p>{product.price}</p>
                <p>{product.price_old}</p>
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="productdisplay-right-category-buttons">
                <button>Add to Cart<FontAwesomeIcon icon={faCartShopping_solid} /></button>
                <button>Add to Favourites<FontAwesomeIcon icon={faHeart_solid} /></button>
            </div>
            <div className="productdisplay-right-category"><span>Categories: </span>{product.categories}</div>
            <div className="productdisplay-right-tags"><span>Tags: </span>{product.tags}</div>
        </div>
    </div>
  )
}