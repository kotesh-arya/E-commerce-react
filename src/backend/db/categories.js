import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Watches",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/d538ae19471a4a6afebe664d430bb2051cdb3e94/Components/Homepage/HomePage-assets/watch-latest.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Glasses",
    imageSource:
      "https://i5.walmartimages.com/asr/febaa19b-c47b-4b50-b062-b665a42f7768_1.d67667f4a3fc7a2ed4df4f196e6d9e84.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
  {
    _id: uuid(),
    categoryName: "Bags",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/c2141050b898475eecb85afaabaea2c3beadde7a/Components/Homepage/HomePage-assets/category-image-bag.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Footwear",
    imageSource:
      "https://raw.githubusercontent.com/kotesh-arya/E-commerce-website/c2141050b898475eecb85afaabaea2c3beadde7a/Components/Homepage/HomePage-assets/category-image-footwear.jpg",
  },
];
