import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("/api/products");
    const products = await response.data.products;
    setAllProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProducts };
