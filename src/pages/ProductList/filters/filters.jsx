import React from "react";
import "../ProductList.css";
import { useProductsFilter } from "../../../contexts/filtersContext";
import { Link, NavLink } from "react-router-dom";
import { useCategories } from "../../../contexts/categoryContext";
const Filters = () => {
  const { state, dispatch } = useProductsFilter();

  const {
    minRating,
    menChecked,
    womenChecked,
    deliveryChecked,
    stockChecked,
    sortBy,
  } = state;
  const { categories } = useCategories();

  return (
    <div>
      <div className="filters-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="filter-header">
            <h2>Filters</h2>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch({ type: "CLEAR_FILTERS" });
              }}
            >
              <Link to="/ProductList"> CLEAR</Link>
            </button>
          </div>

          <div className="price-slider">
            <h4>Customer Ratings</h4>
            <div className="slider-ranges">
              <span>
                1
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </span>
              <span>
                2
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </span>
              <span>
                3
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </span>
              <span>
                4
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </span>
              <span>
                5
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </span>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="5"
                value={minRating}
                className="slider"
                onChange={(e) => {
                  dispatch({ type: "RATING", payload: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="category-container-col">
            <h4>Featured Categories</h4>

            <div className="category-one">
              <input
                id="category-check-men"
                className="category-check"
                name="category"
                type="checkbox"
                checked={menChecked}
                onChange={() => {
                  dispatch({ type: "MEN" });
                }}
              />
              <label htmlFor="category-check-men">Men's Fashion</label>
            </div>

            <div className="category-two">
              <input
                id="category-check-women"
                className="category-check"
                name="category"
                type="checkbox"
                checked={womenChecked}
                onChange={() => {
                  dispatch({ type: "WOMEN" });
                }}
              />
              <label htmlFor="category-check-women">Women's Fashion</label>
            </div>
          </div>
          <div className="delivery-container">
            <h4>Delivery Type</h4>
            <div className="category-three">
              <input
                id="category-check-delivery"
                className="category-check"
                name="category"
                type="checkbox"
                checked={deliveryChecked}
                onChange={() => {
                  dispatch({ type: "FREE_DELIVERY" });
                }}
              />
              <label htmlFor="category-check-delivery">Free Delivery</label>
            </div>
          </div>
          <div className="availability-container">
            <h4>Availability</h4>

            <div className="category-four">
              <input
                id="category-stock-delivery"
                className="category-check"
                name="category"
                type="checkbox"
                checked={stockChecked}
                onChange={() => {
                  dispatch({ type: "IN_STOCK" });
                }}
              />
              <label htmlFor="category-check-delivery">In Stock</label>
            </div>
          </div>

          <ul className="sorting-container">
            <h4>Price</h4>
            <li className="sorting-item">
              <input
                type="radio"
                name="sorting"
                id="decrease"
                checked={sortBy && sortBy === "HIGH_TO_LOW"}
                onChange={() => {
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
                }}
              />{" "}
              <label htmlFor="increase">High to Low</label>
            </li>
            <li className="sorting-item">
              <input
                type="radio"
                name="sorting"
                id="increase"
                checked={sortBy && sortBy === "LOW_TO_HIGH"}
                onChange={() => {
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
                }}
              />{" "}
              <label htmlFor="decrease">Low to High</label>
            </li>
          </ul>

          <div className="category-container-col">
            <h4>Product Categories</h4>

            {categories.map((category) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "inner-page-link" : "";
                  }}
                  key={category._id}
                  to={`/ProductList/${category.categoryName}`}
                >
                  <p>{category.categoryName.toLowerCase()}</p>
                </NavLink>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Filters };
