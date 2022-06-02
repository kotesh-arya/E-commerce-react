import {
  v4 as uuid
} from "uuid";

/**
 * trending Database can be added here.
 * You can add cart items of your wish with different attributes
 * */

export const wishlistItems = [{
    _id: uuid(),
    imageSource: "https://m.media-amazon.com/images/I/91xkv3MQDuL._AC_UL480_FMwebp_QL65_.jpg",
    title: "FOSSIL",
    sellingPrice: 1500,
    listedPrice: 4500,
    categoryName: "men",
  },
  {
    _id: uuid(),
    imageSource: "https://m.media-amazon.com/images/I/81MwXZn540L._AC_UL480_FMwebp_QL65_.jpg",
    title: "TIMEX SPORT",
    sellingPrice: 500,
    listedPrice: 1000,
    categoryName: "men",
  },
  {
    _id: uuid(),
    imageSource: "https://m.media-amazon.com/images/I/81iAfA+bwbL._AC_UL480_FMwebp_QL65_.jpg",
    title: "ANNE CLEIN",
    sellingPrice: 1000,
    listedPrice: 2000,
    categoryName: "women",
  }


];