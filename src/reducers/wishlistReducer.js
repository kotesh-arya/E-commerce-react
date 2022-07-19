export const reducer = (state, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    console.log(action.item);
    return {
      ...state,
      wishlist: [...state.wishlist, action.item],
    };
  }
  if (action.type === "REMOVE_FROM_WISHLIST") {
    const tempWishlist = state.wishlist.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      wishlist: tempWishlist,
    };
  }
  if (action.type === "DISLIKE_ITEM") {
    console.log("disliking works");
    const tempLikedItems = state.wishlist.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      wishlist: tempLikedItems,
    };
  }
  return state;
};
