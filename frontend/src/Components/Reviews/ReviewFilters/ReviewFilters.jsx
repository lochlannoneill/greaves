import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ReviewFilters.css";

export const ReviewFilters = ({
  sortOption,
  showVerifiedOnly,
  showPhotosOnly,
  starFilter,
  onSortChange,
  onVerifiedChange,
  onPhotosChange,
  onStarFilter,
  onReset,
}) => {
  const [hoverStar, setHoverStar] = useState(null);

  return (
    <div className="reviewfilters">
      <div className="reviewfilters-stars">
        <label>Filter by</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={`reviewfilters-star ${
              (hoverStar !== null ? star <= hoverStar : star <= starFilter) ? "active" : ""
            }`}
            onMouseEnter={() => setHoverStar(star)}
            onMouseLeave={() => setHoverStar(null)}
            onClick={() => onStarFilter(star)}
          />
        ))}
      </div>
      <div className="reviewfilters-sort">
        <label>Sort by</label>
        <div className="reviewfilters-sort-select">
          <select value={sortOption} onChange={onSortChange}>
            <option value="helpful">most helpful</option>
            <option value="rating">highest ratings</option>
            <option value="lowestRating">lowest ratings</option>
            <option value="date">most recent</option>
          </select>
        </div>
      </div>
      <div className="reviewfilters-toggles">
        <label className="reviewfilters-toggle">
          Verified
          <input
            type="checkbox"
            checked={showVerifiedOnly}
            onChange={onVerifiedChange}
          />
        </label>
        <label className="reviewfilters-toggle">
          With photos
          <input
            type="checkbox"
            checked={showPhotosOnly}
            onChange={onPhotosChange}
          />
        </label>
      </div>
      <button className="reviewfilters-reset" onClick={onReset}>
        Reset filters
      </button>
    </div>
  );
};
