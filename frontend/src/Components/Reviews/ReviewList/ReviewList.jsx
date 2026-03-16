import { useState, useEffect, useRef, useCallback } from "react";
import Review from "../Review/Review";
import "./ReviewList.css";

const REVIEWS_PER_BATCH = 5;

export const ReviewList = ({ reviews }) => {
  const [sortOption, setSortOption] = useState("helpful");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
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

  // Filter reviews based on verification status
  const filterByVerification = () => {
    if (showVerifiedOnly) {
      return reviews.filter((review) => review.verified);
    }
    return reviews;
  };

  // Handle verified review filter option change
  const handleVerifiedChange = () => {
    setShowVerifiedOnly(!showVerifiedOnly);
    setVisibleCount(REVIEWS_PER_BATCH);
  };

  // Sort and filter reviews
  const sortedAndFilteredReviews = filterByVerification(
    sortByOption(sortOption)
  );

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
        <div className="reviewlist-title">
          <h3>Top Reviews From Ireland</h3>
        </div>
        <div className="reviewlist-sort">
          <div className="reviewlist-sort-filter">
          <label className="reviewlist-sort-filter-label">Sort by</label>
            <div className="reviewlist-sort-filter-option">
              <select
                id="sortOption"
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
          <div className="reviewlist-sort-verified">
            <label className="reviewlist-sort-verified-label">
              Verified
            </label>
            <input className="reviewlist-sort-verified-input"
              type="checkbox"
              checked={showVerifiedOnly}
              onChange={handleVerifiedChange}
            />
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
