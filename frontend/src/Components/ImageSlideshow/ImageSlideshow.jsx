import React, { useEffect, useState, useRef } from "react";
import "./ImageSlideshow.css";

export default function ImageSlideshow({
  images,
  startIndex = 0,
  isOpen,
  onClose,
}) {
  const [index, setIndex] = useState(startIndex);

  // Touch tracking for swipe
  const touchStartX = useRef(null);
  const SWIPE_THRESHOLD = 60; // px

  // Drag animation
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  // Keyboard support (Esc, ←, →)
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        goNext();
      }
      if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, images.length, onClose]);

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
    setDragX(0);
    setIsDragging(false);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
    setDragX(0);
    setIsDragging(false);
  };

  // Touch handlers for swipe with realistic animation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragX(0);
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;
    setDragX(deltaX);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null) {
      setIsDragging(false);
      setDragX(0);
      return;
    }

    const deltaX = dragX;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        // dragged left → next
        goNext();
      } else {
        // dragged right → prev
        goPrev();
      }
    } else {
      // not enough swipe → snap back
      setDragX(0);
    }

    setIsDragging(false);
    touchStartX.current = null;
  };

  if (!isOpen) return null;

  // Base offset to center the current slide, then add drag offset in px
  const trackTransform = `translateX(calc(${-index * 100}% + ${dragX}px))`;

  return (
    <div className="slideshow-overlay" onClick={onClose}>
      <div className="slideshow-inner" onClick={(e) => e.stopPropagation()}>
        <button className="slideshow-close" onClick={onClose}>
          &times;
        </button>

        <div
          className="slideshow-main"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="slideshow-nav prev" onClick={goPrev}>
            &#10094;
          </button>

          {/* Track that slides all images horizontally */}
          <div
            className={`slideshow-track ${isDragging ? "dragging" : ""}`}
            style={{ transform: trackTransform }}
          >
            {images.map((src, i) => (
              <div className="slideshow-slide" key={i}>
                <img
                  src={src}
                  className="slideshow-main-img"
                  alt={`Slide ${i + 1}`}
                />
              </div>
            ))}
          </div>

          <button className="slideshow-nav next" onClick={goNext}>
            &#10095;
          </button>
        </div>

        <div className="slideshow-thumbnails">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => {
                setIndex(i);
                setDragX(0);
              }}
              className={`slideshow-thumb ${i === index ? "active" : ""}`}
              alt={`Thumbnail ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
