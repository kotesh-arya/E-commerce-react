import { useContext, createContext, useReducer } from "react";

import { reducer } from "../reducers/filtersReducer";


const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    minPrice: 500,
    minRating: 0,
    menChecked: false,
    womenChecked: false,
    deliveryChecked: false,
    stockChecked: false,
    sortBy: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const ProductsFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, ProductsFilterContext };
