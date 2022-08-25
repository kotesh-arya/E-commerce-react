export const reducer = (state, action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    // console.log(action.item);
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
  if (action.type === "PRE_EXISTED_WISHLIST_ITEM") {
    console.log(
      "from wishlist reducer, preexisted whilist item operates here!!"
    );
    console.log(action.payload);
    return {
      ...state,
      isWishlistModalOpen: true,
      wishlistModalContent: `${action.payload} already exists in the Wishlist`,
    };
  }
  if (action.type === "REMOVE_MODAL") {
    return {
      ...state,
      isWishlistModalOpen: false,
    };
  }
  return state;
};
