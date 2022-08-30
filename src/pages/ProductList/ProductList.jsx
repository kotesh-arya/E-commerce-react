import React from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import { Filters } from "./filters/filters";
import { ProductlistCard } from "./ProductlistCard";
import { OutOfStockCard } from "./OutOfStockCard";
import "../../Colours/colours.css";
import "../ProductList/ProductList.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";
import { useProductsFilter } from "../../contexts/filtersContext";

import {
  setRating,
  toggleMenCategory,
  toggleWomenCategory,
  toggleDelivery,
  toggleStockAvailability,
  sortProducts,
} from "../ProductList/filters/filterOperations";

function ProductList() {
  const params = useParams();
  const { allProducts } = useProducts();
  const shuffledProducts = allProducts?.sort(() => 0.5 - Math.random());
  const { state } = useProductsFilter();

  const {
    minRating,
    menChecked,
    womenChecked,
    deliveryChecked,
    stockChecked,
    sortBy,
  } = state;
  const categorisedProducts = shuffledProducts.filter((product) => {
    return params.category
      ? product.productCategory?.toLowerCase() === params.category.toLowerCase()
      : true;
  });
  const ratingFiltered = setRating(categorisedProducts, minRating);
  const menFiltered = toggleMenCategory(
    ratingFiltered,
    womenChecked,
    menChecked
  );
  const womenFiltered = toggleWomenCategory(
    ratingFiltered,
    menChecked,
    womenChecked
  );
  const deliveryFilteredProducts = toggleDelivery(
    womenFiltered,
    deliveryChecked
  );
  const sortedProducts = sortProducts(deliveryFilteredProducts, sortBy);
  const finalFilteredProducts = toggleStockAvailability(
    sortedProducts,
    stockChecked
  );

  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <Filters />
        <div className="product-section">
          <h1 className="header-large product-header">
            Showing {finalFilteredProducts.length} Products
          </h1>
          <hr />
          <div className="product-container">
            {finalFilteredProducts.map((product) => {
              if (product.inStock) {
                return <ProductlistCard key={product._id} {...product} />;
              } else {
                return <OutOfStockCard key={product._id} {...product} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductList };
