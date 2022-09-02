import {
  CLEAR_FILTERS,
  RATING,
  MEN,
  WOMEN,
  FREE_DELIVERY,
  SORT,
  IN_STOCK,
} from "../constants/filterStateConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FILTERS:
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

    case RATING:
      return {
        ...state,
        minRating: action.payload,
      };
    case MEN:
      return {
        ...state,
        menChecked: !state.menChecked,
      };

    case WOMEN:
      return {
        ...state,
        womenChecked: !state.womenChecked,
      };

    case FREE_DELIVERY:
      return {
        ...state,
        deliveryChecked: !state.deliveryChecked,
      };
    case SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case IN_STOCK:
      return {
        ...state,
        stockChecked: !state.stockChecked,
      };
  }
};
