import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrumb } from "../Components/Breadcrumbs/Breadcrumb";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { Related } from "../Components/Related/Related";
import { Reviews } from "../Components/Reviews/Reviews";
import "./CSS/Product.css";

export const Product = () => {
  const { products, reviews, getReviewInfo } = useContext(ShopContext);
  const { id } = useParams();
  const product = products.find((e) => e.id === Number(id));
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverageRating, setReviewAverageRating] = useState(0);

  // Fetch reviews data associated with the product
  useEffect(() => {
    if (product) {
      const productReviews = reviews.filter(
        (review) => review.productId === product.id
      );
      const { reviewCount, reviewAverageRating } = getReviewInfo(product.id, productReviews);
      setReviewCount(reviewCount);
      setReviewAverageRating(reviewAverageRating);
    }
  }, [product, reviews, getReviewInfo]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product">
      <div className="product-components">
        <Breadcrumb product={product} />
        <ProductDisplay product={product} reviewAverageRating={reviewAverageRating} reviewCount={reviewCount} />
        <Related />
        <Reviews reviews={reviews} productId={product.id} />
      </div>
    </div>
  );
};
