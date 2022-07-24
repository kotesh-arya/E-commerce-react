import {
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("/api/categories");
    const categories = await response.data.categories;
    setCategories(categories);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategories = () => {
  return useContext(CategoryContext);
};

export { CategoryProvider, useCategories };
