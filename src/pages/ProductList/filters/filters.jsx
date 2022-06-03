import React from "react";
import "../ProductList.css";
import { ProductsFilterContext } from "../../../contexts/filtersContext";

const Filters = () => {
  const { state, dispatch } = ProductsFilterContext();

  const {
    minRating,
    menChecked,
    womenChecked,
    deliveryChecked,
    stockChecked,
    sortBy,
  } = state;

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
              CLEAR
            </button>
          </div>

          <div className="price-slider">
            <h4>Customer Ratings</h4>
            <div className="slider-ranges">
              <h3>
                1
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </h3>
              <h3>
                2
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </h3>
              <h3>
                3
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </h3>
              <h3>
                4
                <span aria-label="rating" role="img">
                  ⭐
                </span>
              </h3>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="4"
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
              <label htmlFor="category-check-delivery">Fast Delivery</label>
            </div>
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
                  // console.log("decrease");
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
                  // console.log("increase");
                }}
              />{" "}
              <label htmlFor="decrease">Low to High</label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Filters;
