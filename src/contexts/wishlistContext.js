import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/wishlistReducer";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialState = {
    wishlist: [],
  };
  const addToWIshlist = (id) => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: id });
  };
  const removeFromWishlist = (id) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };
  const dislike = (_id) => {
    wishlistDispatch({ type: "DISLIKE_ITEM", payload: _id });
  };
  const moveToCart = (id) => {
    wishlistDispatch({ type: "MOVE_TO_CART", payload: id });
  };

  const [state, wishlistDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    wishlistDispatch({ type: "GET_TOTALS" });
  }, [state.wishlist]);
  return (
    <WishlistContext.Provider
      value={{
        ...state,
        wishlistDispatch,
        addToWIshlist,
        removeFromWishlist,
        moveToCart,
        dislike,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlist };
