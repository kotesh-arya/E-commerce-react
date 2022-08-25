import React from "react";
import { Link } from "react-router-dom";
import "../../../../Colours/colours.css";
import "../CategoryCard/CategoryCard.css";
import { useCategories } from "../../../../contexts/categoryContext";
const CategoryCard = () => {
  const { categories } = useCategories();
  return (
    <div className="category-container">
      <div className="section-heading">
        <h1 className="header-extra-large ">CATEGORIES</h1>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {categories.map((category) => {
          return (
            <Link
              className="category-title-link"
              key={category._id}
              to={`/ProductList/${category.categoryName}`}
            >
              <div className="category">
                <div className="category-image-container">
                  <img
                    src={category.imageSource}
                    alt="category-item"
                    className="category-image"
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
