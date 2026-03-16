import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
import "./ReviewList.css";

const REVIEWS_PER_BATCH = 5;

export const ReviewList = ({ reviews }) => {
  const [sortOption, setSortOption] = useState("helpful");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [showPhotosOnly, setShowPhotosOnly] = useState(false);
  const [starFilter, setStarFilter] = useState(null);
  const [hoverStar, setHoverStar] = useState(null);
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_BATCH);
  const sentinelRef = useRef(null);

  // TODO - Helpful -> does not continue after first.
  // Sorting function based on the selected option
  const sortByOption = (option) => {
    switch (option) {
      case "rating":
        return reviews.sort((a, b) => b.rating - a.rating);
      case "date":
        return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "helpful":
        return reviews.sort((a, b) => b.helpful.length - a.helpful.length);
      case "lowestRating":
        return reviews.sort((a, b) => a.rating - b.rating);
      default:
        return reviews; // Default case returns original array
    }
  };

  // Handle sorting option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setVisibleCount(REVIEWS_PER_BATCH);
  };

  // Handle verified review filter option change
  const handleVerifiedChange = () => {
    setShowVerifiedOnly(!showVerifiedOnly);
    setVisibleCount(REVIEWS_PER_BATCH);
  };

  // Handle photos only filter
  const handlePhotosChange = () => {
    setShowPhotosOnly(!showPhotosOnly);
    setVisibleCount(REVIEWS_PER_BATCH);
  };

  // Handle star rating filter
  const handleStarFilter = (star) => {
    setStarFilter(starFilter === star ? null : star);
    setVisibleCount(REVIEWS_PER_BATCH);
  };

  // Sort and filter reviews
  let sortedAndFilteredReviews = sortByOption(sortOption);
  if (showVerifiedOnly) {
    sortedAndFilteredReviews = sortedAndFilteredReviews.filter((r) => r.verified);
  }
  if (showPhotosOnly) {
    sortedAndFilteredReviews = sortedAndFilteredReviews.filter((r) => r.images && r.images.length > 0);
  }
  if (starFilter) {
    sortedAndFilteredReviews = sortedAndFilteredReviews.filter((r) => r.rating === starFilter);
  }

  const hasMore = visibleCount < sortedAndFilteredReviews.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + REVIEWS_PER_BATCH, sortedAndFilteredReviews.length)
    );
  }, [sortedAndFilteredReviews.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "300px" }
    );

    const sentinel = sentinelRef.current;
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore]);

  return (
    <div className="reviewlist">
      <div className="reviewlist-header">
        <h3>Top Reviews From Ireland</h3>
        <div className="reviewlist-filters">
          <div className="reviewlist-stars">
            <label>Filter by</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={`reviewlist-star ${
                  (hoverStar !== null ? star <= hoverStar : star <= starFilter) ? "active" : ""
                }`}
                onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => setHoverStar(null)}
                onClick={() => handleStarFilter(star)}
              />
            ))}
          </div>
          <div className="reviewlist-filters-sort">
            <label>Sort by</label>
            <div className="reviewlist-filters-sort-select">
              <select
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="helpful">most helpful</option>
                <option value="rating">highest ratings</option>
                <option value="lowestRating">lowest ratings</option>
                <option value="date">most recent</option>
              </select>
            </div>
          </div>
          <div className="reviewlist-filters-toggles">
            <label className="reviewlist-filters-toggle">
              Verified
              <input
                type="checkbox"
                checked={showVerifiedOnly}
                onChange={handleVerifiedChange}
              />
            </label>
            <label className="reviewlist-filters-toggle">
              With photos
              <input
                type="checkbox"
                checked={showPhotosOnly}
                onChange={handlePhotosChange}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="reviewlist-reviews">
        {sortedAndFilteredReviews.slice(0, visibleCount).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      {hasMore && (
        <div ref={sentinelRef} className="reviewlist-loading">
          <div className="reviewlist-spinner" />
        </div>
      )}
    </div>
  );
};
