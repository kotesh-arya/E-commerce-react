export const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    console.log("removed cart item");
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    console.log(tempCart);
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "INCREASE_CART_ITEM") {
    console.log(state.cart);
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload && item.amount <= 9) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "DECREASE_CART_ITEM") {
    const tempCart = state.cart
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
      cart: tempCart,
    };
  }
  if (action.type === "GET_TOTALS") {
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
  }

  if (action.type === "MOVE_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }
  if (action.type === "PRE_EXISTED_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: ` ${action.payload} already exists in the CART`,
    };
  }
  if (action.type === "INVALID_USER_INPUT") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: `Incorrect Email or Password, Please try again`,
    };
  }
  if (action.type === "REMOVE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  return state;
};
