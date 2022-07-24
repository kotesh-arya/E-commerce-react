import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./contexts/filtersContext";
import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/authContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import { ProductProvider } from "./contexts/productContext";
import { CategoryProvider } from "./contexts/categoryContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <WishlistProvider>
            <CategoryProvider>
              <ProductProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </ProductProvider>
            </CategoryProvider>
          </WishlistProvider>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
