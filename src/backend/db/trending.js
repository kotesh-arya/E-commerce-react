import { v4 as uuid } from "uuid";

/**
 * trending Database can be added here.
 * You can add trending of your wish with different attributes
 * */

export const trending = [
  {
    _id: uuid(),
    trendingTitle: "GEAR Leather Bag",
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/klv7ekw0/backpack/s/t/4/classic-anti-theft-faux-leather-lbpclslth1901-laptop-backpack-original-imagyw7gt2xmqyz5.jpeg?q=50",
    description:
      "Gear-up your fashion to a Rugged look with this leather bag from GEAR",
  },
  {
    _id: uuid(),
    trendingTitle: "DealsForYou Sneakers",
    imageSource:
      "https://i5.walmartimages.com/asr/e77c9229-3aa5-447c-91f7-c11a36755d89_1.e58f8839e0875efb2ff19c39a54affee.jpeg",
    description:
      "The best companion for your Feet, which gives you a ultra-stylish look",
  },
];
