
export const toggleMenCategory = (products, menChecked) => {
  return products.filter((item) =>
    menChecked ? item.categoryName === "men" : item
  );
};

export const toggleWomenCategory = (products, womenChecked) => {
  return products.filter((item) =>
    womenChecked ? item.categoryName === "women" : item
  );
};

export const toggleDelivery = (products, deliveryChecked) => {
  return products.filter((item) =>
    deliveryChecked ? item.freeDelivery === true : item
  );
};

export const toggleStockAvailability = (products, stockChecked) => {
  return products.filter((item) =>
    stockChecked ? item.inStock === true : item
  );
};

// //Rating slider

export const setRating = (products, rating) => {
  return products.filter((item) => item.rating >= rating);
};

// //Price Sorting

export const sortProducts = (products, way) => {
  if (way === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b["sellingPrice"] - a["sellingPrice"]);
  }
  if (way === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a["sellingPrice"] - b["sellingPrice"]);
  }
  return products;
};
