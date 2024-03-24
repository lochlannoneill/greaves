import React from "react";
import placeholder_user from "../Assets/placeholder_user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCheck,
  faPlus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";
import "./ReviewList.css";

export const ReviewList = ({ reviews }) => {
  // Check if reviews is an array before proceeding
  if (!Array.isArray(reviews)) {
    return <p>No reviews yet</p>;
  }

  return (
    <div className="reviewlist">
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <div className="review-user">
            <img
              className="review-user-image"
              src={review.profile_image || placeholder_user}
              alt="user"
            />
            <div className="review-user-info">
              <p className="review-user-name">{review.userName}</p>
              <p className="review-user-handle">{review.userHandle}</p>
            </div>
          </div>
          <div className="review-info">
            <div className="review-info-rating">
              <span className="review-info-rating-stars">
                {[...Array(Math.floor(review.rating))].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className="review-info-rating-icon"
                    icon={faStar_solid}
                  />
                ))}
                {review.rating % 1 !== 0 && (
                  <FontAwesomeIcon
                    className="review-info-rating-icon"
                    icon={faStar_half}
                  />
                )}
                {[...Array(5 - Math.ceil(review.rating))].map((_, index) => (
                  <FontAwesomeIcon
                    key={index + Math.ceil(review.rating)}
                    className="review-info-rating-icon"
                    icon={faStar_regular}
                  />
                ))}
              </span>
              <p className="review-info-rating-number">{review.rating}</p>
            </div>
            <div className="review-info-summary">
              <p>{review.summary}</p>
            </div>
            <div className="review-info-date">
              <p>
                {review.date} at {review.time}
              </p>
            </div>
            <div className="review-info-verification">
              {review.verified ? (
                <>
                  <FontAwesomeIcon
                    className="review-info-verification-checkmark"
                    icon={faCheck}
                  />
                  <p className="review-info-verification-text">
                    Verified Review
                  </p>
                </>
              ) : null}
            </div>
          </div>
          {/* Render review images */}
          {review.images.length > 0 && (
            <div className="review-images">
              {review.images.slice(0, 3).map((image, index) => (
                <img key={index} src={image} alt={`review-${index}`} />
              ))}
              {/* Conditionally render the expand button */}
              {review.images.length > 3 && (
                <div className="review-images-expand">
                  <FontAwesomeIcon
                    className="review-images-expand-icon"
                    icon={faPlus}
                  />
                  <img src={review.images[3]} alt={`review-3`} />
                </div>
              )}
            </div>
          )}

          <div className="review-description">
            <p>{review.description}</p>
          </div>
          <div className="review-helpful">
            {review.helpful.length > 0 && (
              <p className="review-helpful-count">
                {review.helpful.length}{" "}
                {review.helpful.length === 1 ? "person" : "people"} found this
                review helpful
              </p>
            )}
            <div className="review-helpful-actions">
              <button className="review-helpful-button">Helpful</button>
              <a href="#report" className="review-helpful-report">
                Report
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* Show more button */}
      <div className="review-showmore">
        <p>
          Show More <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </p>
      </div>
    </div>
  );
};