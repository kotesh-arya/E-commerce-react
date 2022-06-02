import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "WATCHES",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/d538ae19471a4a6afebe664d430bb2051cdb3e94/Components/Homepage/HomePage-assets/watch-latest.jpg",
  },
  {
    _id: uuid(),
    categoryName: "GLASSES",
    imageSource:
      "https://thumbs.dreamstime.com/b/black-stylish-men-s-sunglasses-isolate-white-background-pair-summer-dark-glasses-isolated-169446844.jpg",
  },
  {
    _id: uuid(),
    categoryName: "BAGS",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/c2141050b898475eecb85afaabaea2c3beadde7a/Components/Homepage/HomePage-assets/category-image-bag.jpg",
  },

  {
    _id: uuid(),
    categoryName: "FOOTWEAR",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/c2141050b898475eecb85afaabaea2c3beadde7a/Components/Homepage/HomePage-assets/category-image-footwear.jpg",
  },
];
