import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../../backend/db/categories";
import "../../../../Colours/colours.css";
import "../CategoryCard/CategoryCard.css";
const CategoryCard = () => {
  return (
    <div className="category-container">
      <div className="section-heading">
        <h1 className="header-extra-large ">CATEGORIES</h1>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {categories.map((category) => {
          return (
            <Link key={category._id} to="/ProductList">
              <div className="category">
                <div className="category-image-container">
                  <img
                    src={category.imageSource}
                    alt="watch"
                    className="card-image"
                  />
                </div>
                <div className="category-card-title">
                  <h4>{category.categoryName}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryCard };
