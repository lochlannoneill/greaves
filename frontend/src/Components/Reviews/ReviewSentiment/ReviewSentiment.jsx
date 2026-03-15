import React, { useMemo } from "react";
import "./ReviewSentiment.css";

const themes = [
  {
    key: "softness",
    words: ["soft", "smooth", "gentle", "cozy", "cosy"],
    positive: "Reviewers frequently praise how soft and comfortable the fabric feels.",
    negative: "Some customers find the material less soft than expected.",
  },
  {
    key: "fit",
    words: ["fit", "fits", "fitting", "slim", "loose", "tight", "baggy", "sizing", "size"],
    positive: "Most customers are happy with the fit.",
    negative: "Fit can be inconsistent — check the size guide before ordering.",
  },
  {
    key: "warmth",
    words: ["warm", "warmth", "cozy", "cosy", "thick", "lightweight", "thin"],
    positive: "Customers note it keeps them warm without being bulky.",
    negative: "A few reviewers mention it may not be warm enough for colder weather.",
  },
  {
    key: "style",
    words: ["stylish", "smart", "elegant", "looks", "design", "colour", "color", "pattern"],
    positive: "The design and overall look receive plenty of compliments.",
    negative: "Opinions on the styling are divided.",
  },
  {
    key: "quality",
    words: ["quality", "durable", "well made", "well-made", "sturdy", "cheap", "flimsy"],
    positive: "Build quality is a highlight for many buyers.",
    negative: "A number of customers have concerns about the overall quality.",
  },
  {
    key: "value",
    words: ["price", "value", "worth", "expensive", "bargain", "money"],
    positive: "Many feel it offers good value for the price.",
    negative: "Some customers feel it's overpriced for what you get.",
  },
  {
    key: "length",
    words: ["short", "long", "length", "sleeves", "hem", "hips", "thighs"],
    positive: "The length is generally well-received.",
    negative: "Length can be an issue — some find it shorter than expected.",
  },
];

const generateSummary = (reviews) => {
  if (!reviews || reviews.length === 0) return null;

  const count = reviews.length;
  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / count;

  // Combine all text for keyword scanning
  const allText = reviews
    .map((r) => `${r.summary || ""} ${r.description || ""}`)
    .join(" ")
    .toLowerCase();

  // Count positive vs negative reviews per theme
  const detected = [];
  for (const theme of themes) {
    const matches = theme.words.some((w) => allText.includes(w));
    if (matches) {
      // Determine if theme sentiment is positive or negative based on avg rating of reviews mentioning it
      const relevantReviews = reviews.filter((r) => {
        const text = `${r.summary || ""} ${r.description || ""}`.toLowerCase();
        return theme.words.some((w) => text.includes(w));
      });
      const themeAvg =
        relevantReviews.reduce((s, r) => s + r.rating, 0) /
        relevantReviews.length;
      detected.push({
        ...theme,
        themeAvg,
        sentence: themeAvg >= 3 ? theme.positive : theme.negative,
      });
    }
  }

  // Build the opening line
  let opener;
  if (avg >= 4.5) opener = `Customers love this product.`;
  else if (avg >= 3.5) opener = `Customers are generally happy with this product.`;
  else if (avg >= 2.5) opener = `Customer opinions on this product are mixed.`;
  else opener = `Customers have concerns about this product.`;

  // Pick top 3 most relevant theme sentences
  const themeSentences = detected.slice(0, 3).map((d) => d.sentence);

  if (themeSentences.length === 0) {
    return `${opener} Based on ${count} review${count !== 1 ? "s" : ""}, the average rating is ${avg.toFixed(1)} out of 5.`;
  }

  return `${opener} ${themeSentences.join(" ")}`;
};

export const ReviewSentiment = ({ reviews }) => {
  const summary = useMemo(() => generateSummary(reviews), [reviews]);

  if (!summary) return null;

  return (
    <div className="reviewsentiment">
      <h3>Customers Say</h3>
      <p>{summary}</p>
    </div>
  );
};
