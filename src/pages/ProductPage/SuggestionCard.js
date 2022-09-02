import React from "react";
import "../ProductPage/SuggestionCard.css";
function SuggestionCard({ imageSource, title }) {
  return (
    <div className="suggestion-container">
      <div className="suggestion-image-container">
        <img className="suggestion-image" src={imageSource} alt="" />
      </div>
      <h4 className="suggestion-title">{title}</h4>
    </div>
  );
}

export { SuggestionCard };
