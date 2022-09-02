import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  GET_TOTALS,
  MOVE_TO_CART,
  REMOVE_MODAL,
  PAYMENT_DONE,
} from "../constants/cartStateConstants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case REMOVE_FROM_CART:
      const tempCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        cart: tempCart,
      };

    case INCREASE_CART_ITEM:
      const increasingCart = state.cart.map((item) => {
        if (item.id === action.payload && item.amount <= 9) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: increasingCart,
      };
    case DECREASE_CART_ITEM:
      const decreasingCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => {
          return item.amount > 0;
        });
      return {
        ...state,
        cart: decreasingCart,
      };

    case GET_TOTALS:
      let { total, amount, listedPriceTotal, discountPriceTotal } =
        state.cart.reduce(
          (cartTotal, cartItem) => {
            const { sellingPrice, listedPrice, amount } = cartItem;
            let itemTotal = sellingPrice * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            let initialPriceTotal = listedPrice * amount;
            cartTotal.listedPriceTotal += initialPriceTotal;
            let discountedPrice = listedPrice - sellingPrice;
            let discountPriceTotal = discountedPrice * amount;
            cartTotal.discountPriceTotal += discountPriceTotal;
            return cartTotal;
          },
          { total: 0, amount: 0, listedPriceTotal: 0, discountPriceTotal: 0 }
        );
      return { ...state, total, amount, listedPriceTotal, discountPriceTotal };

    case MOVE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case REMOVE_MODAL:
      return {
        ...state,
        isCartModalOpen: false,
      };
    case PAYMENT_DONE:
      return {
        ...state,
        cart: [],
      };
  }
};
