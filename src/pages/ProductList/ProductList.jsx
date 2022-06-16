import React, { useState, useEffect } from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import Filters from "./filters/filters";
import "../../Colours/colours.css";
import "../ProductList/ProductList.css";
import { ProductsFilterContext } from "../../contexts/filtersContext";

import { ProductlistCard } from "./ProductlistCard";
import { OutOfStockCard } from "./OutOfStockCard";
import axios from "axios";
import {
  setRating,
  toggleMenCategory,
  toggleWomenCategory,
  toggleDelivery,
  toggleStockAvailability,
  sortProducts,
} from "../ProductList/filters/filterOperations";

function ProductList() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("/api/products");
    const products = response.data.products;
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const { state } = ProductsFilterContext();
 
  const {
    minRating,
    menChecked,
    womenChecked,
    deliveryChecked,
    stockChecked,
    sortBy,
  } = state;

  const ratingFiltered = setRating(products, minRating);
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
          <h1 className="header-large product-header">Showing All Products</h1>
          
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
