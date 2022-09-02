import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/wishlistReducer";
import { MOVE_TO_CART } from "../constants/cartStateConstants";
import { useCart } from "../contexts/cartContext";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  DISLIKE_ITEM,
} from "../constants/wishlistStateConstants";
const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const { dispatch } = useCart();

  const initialState = {
    wishlist: [],
    isWishlistModalOpen: false,
    wishlistModalContent: " ",
  };
  const addToWIshlist = (id) => {
    wishlistDispatch({ type: ADD_TO_WISHLIST, payload: id });
  };
  const removeFromWishlist = (id) => {
    wishlistDispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  };
  const dislike = (_id) => {
    wishlistDispatch({ type: DISLIKE_ITEM, payload: _id });
  };
  const moveToCart = (id) => {
    dispatch({ type: MOVE_TO_CART, payload: id });
  };

  const [state, wishlistDispatch] = useReducer(reducer, initialState);
  // useEffect(() => {
  //   console.log(state.wishlist);
  // }, []);
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
