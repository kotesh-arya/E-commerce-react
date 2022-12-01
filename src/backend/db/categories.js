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
      "https://i.pinimg.com/originals/76/a3/8d/76a38d2ba51f32142bfd45d081ac5656.jpg",
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
      "https://media.istockphoto.com/photos/mens-bag-on-white-background-picture-id643070432?k=6&m=643070432&s=170667a&w=0&h=omW3Dzz0CRP7Uh-beo-f5UBRQ-uAjQTig9ir4zWxIIk=",
  },

  {
    _id: uuid(),
    categoryName: "Footwear",
    imageSource:
      "https://thumbs.dreamstime.com/b/close-up-elegant-gray-sport-shoes-adult-man-photographed-white-background-men-s-sport-shoes-isolated-white-background-117753644.jpg",
  },
];
