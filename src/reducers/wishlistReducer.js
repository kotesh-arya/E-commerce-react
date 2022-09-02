import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  DISLIKE_ITEM,
} from "../constants/wishlistStateConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case REMOVE_FROM_WISHLIST:
      const tempWishlist = state.wishlist.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        wishlist: tempWishlist,
      };

    case DISLIKE_ITEM:
      const tempLikedItems = state.wishlist.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        wishlist: tempLikedItems,
      };
  }
};
