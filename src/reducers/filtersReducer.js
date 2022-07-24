export const reducer = (state, action) => {
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      minPrice: 500,
      menChecked: false,
      womenChecked: false,
      deliveryChecked: false,
      stockChecked: false,
      sortBy: null,
      minRating: 1,
    };
  }
  if (action.type === "RATING") {
    return {
      ...state,
      minRating: action.payload,
    };
  }
  if (action.type === "MEN") {
    return {
      ...state,
      menChecked: !state.menChecked,
    };
  }
  if (action.type === "WOMEN") {
    return {
      ...state,
      womenChecked: !state.womenChecked,
    };
  }
  if (action.type === "FREE_DELIVERY") {
    return {
      ...state,
      deliveryChecked: !state.deliveryChecked,
    };
  }
  if (action.type === "SORT") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === "IN_STOCK") {
    return {
      ...state,
      stockChecked: !state.stockChecked,
    };
  }
  return state;
};
