import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import bannerWomen from "../../Assets/banners/banner_women.png";
import bannerMen from "../../Assets/banners/banner_men.png";
import bannerGirls from "../../Assets/banners/banner_girls.png";
import bannerBoys from "../../Assets/banners/banner_boys.png";
import bannerDefault from "../../Assets/banners/banner_default.png";
import "./BannerCategory.css";

export const BannerCategory = ({ category = "default" }) => {
  const [searchValue, setSearchValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [animKey, setAnimKey] = useState(0);

  const location = useLocation();

  // Re-trigger animations whenever the route changes
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [location.pathname]);

  const bgColors = {
    women: "#722F37",
    girls: "#FF8FB1",
    men: "#001F54",
    boys: "#2D82FF",
    default: "#555",
  };
  const backgroundColor = bgColors[category] || bgColors.default;

  const categoryImages = {
    women: bannerWomen,
    girls: bannerGirls,
    men: bannerMen,
    boys: bannerBoys,
    default: bannerDefault,
  };

  const categoryImage = categoryImages[category] || categoryImages.default;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(searchValue.trim());
  };

  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Map each category to its shape prefix (w, m, g, b)
  const shapePrefixMap = {
  women: "women",
  men: "men",
  girls: "girls",
  boys: "boys",
};
const shapeCategory = shapePrefixMap[category];

  return (
    <div
      className={`category-banner category-banner--${
        shapeCategory || "default"
      }`}
      style={{ backgroundColor }}
    >
      {shapeCategory &&
        [1, 2, 3, 4].map((n) => (
          <div
            key={`shape-${shapeCategory}-${n}`}
            className={`category-banner-shape shape-${n}`}
          />
        ))}

      {/* key forces remount → animation restarts */}
      <div
        key={`left-${animKey}`}
        className="category-banner-left fade-in-right"
      >
        <img
          src={categoryImage}
          alt={`${category}'s fashion banner`}
          className="category-banner-image"
        />

        <div className="category-banner-text">
          <p>{capitalizedCategory}'s fashion</p>
        </div>
      </div>

      <div
        key={`right-${animKey}`}
        className="category-banner-right fade-in-left"
      >
        <div className="category-banner-search">
          <form className="category-banner-search-form" onSubmit={handleSubmit}>
            <div className="category-banner-search-bar">
              <div className="category-banner-search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>

              <input
                className="category-banner-search-input"
                type="text"
                placeholder={`Search in ${category}'s products`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>
        </div>

        {submittedValue && (
          <div className="category-banner-search-results">
            <p>
              Showing results for <b>'{submittedValue}'</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
