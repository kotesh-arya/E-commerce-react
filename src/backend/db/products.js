import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/81MwXZn540L._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX SPORT",
    sellingPrice: 500,
    listedPrice: 1000,
    rating: 5,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/81iAfA+bwbL._AC_UL480_FMwebp_QL65_.jpg",
    title: "ANNE CLEIN",
    sellingPrice: 1000,
    listedPrice: 2000,
    rating: 3,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/815ixaaYx5L._AC_UL480_FMwebp_QL65_.jpg",
    title: "FOSSIL",
    sellingPrice: 1500,
    listedPrice: 4500,
    rating: 3,
    categoryName: "men",
    freeDelivery: false,
    inStock: false,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/71zjsIlFkYL._AC_UL480_FMwebp_QL65_.jpg",
    title: "SHENGKE",
    sellingPrice: 2000,
    listedPrice: 3500,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/71G3W5z0F2L._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX SPORT",
    sellingPrice: 500,
    listedPrice: 1000,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: false,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/81UWO62KbFL._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX RUBY",
    sellingPrice: 1000,
    listedPrice: 2000,
    rating: 4,
    categoryName: "women",
    freeDelivery: false,
    inStock: false,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/91xkv3MQDuL._AC_UL480_FMwebp_QL65_.jpg",
    title: "FOSSIL",
    sellingPrice: 1500,
    listedPrice: 4500,
    rating: 2,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
  },

  //////////////////////////////
  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/71e-7qL7O2L._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX MONA",
    sellingPrice: 2000,
    listedPrice: 3500,
    rating: 5,
    categoryName: "women",
    freeDelivery: true,
    inStock: false,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/91p7N-29Z9L._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX SPORT",
    sellingPrice: 500,
    listedPrice: 1000,
    rating: 5,
    categoryName: "men",
    freeDelivery: true,
    inStock: false,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/61d6vqIcKhS._AC_UL480_FMwebp_QL65_.jpg",
    title: "OLEVS",
    sellingPrice: 1000,
    listedPrice: 2000,
    rating: 5,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/81t12gAgnpS._AC_UL480_FMwebp_QL65_.jpg",
    title: "FOSSIL",
    sellingPrice: 1500,
    listedPrice: 4500,
    rating: 1,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
  },

  {
    _id: uuid(),
    imageSource:
      "https://m.media-amazon.com/images/I/71brQBu2DjL._AC_UL480_FMwebp_QL65_.jpg",
    title: "CRYSTAL",
    sellingPrice: 2000,
    listedPrice: 3500,
    rating: 1,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
  },
];
