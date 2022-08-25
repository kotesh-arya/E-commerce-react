import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/cartReducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
    amount: 0,
    listedPriceTotal: 0,
    discountPriceTotal: 0,
    isCartModalOpen: false,
    cartModalContent: "",
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE_CART_ITEM", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE_CART_ITEM", payload: id });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, dispatch, remove, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
