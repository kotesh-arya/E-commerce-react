import {
  v4 as uuid
} from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
    _id: uuid(),
    categoryName: "Watches",
    imageSource: "https://media.istockphoto.com/photos/luxury-watch-isolated-on-white-background-with-clipping-path-for-or-picture-id1180244659?b=1&k=20&m=1180244659&s=170667a&w=0&h=apyCu-r2h8VxOltgwqfC8rdhBPZsw2xtch_LFlKvFrM="

  },
  {
    _id: uuid(),
    categoryName: "Goggles",
    imageSource: "https://images-eu.ssl-images-amazon.com/images/I/31oKdXG3tVL._SY445_SX342_QL70_ML2_.jpg"

  },
  {
    _id: uuid(),
    categoryName: "Bags",
    imageSource: "https://5.imimg.com/data5/KK/BE/MY-1077550/designer-leather-bag-500x500.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Belts",
    imageSource: "https://media.istockphoto.com/photos/mens-belt-on-white-background-picture-id1005815170?k=20&m=1005815170&s=170667a&w=0&h=0xC3bgftNGj-Au-I73r_0NOdVRhGOUPI8dOIoI8HbWg="
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    imageSource: "https://img.freepik.com/free-photo/running-shoes-white-background_10541-635.jpg?size=626&ext=jpg"
  },

];