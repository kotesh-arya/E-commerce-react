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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
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
    productCategory: "WATCHES",
  },

  //GLASSES- MEN & WOMEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l2hwwi80/sunglass/t/s/f/-original-imagdtvfugxghug7.jpeg?q=50",
    title: "RayBan - Sunglasses",
    sellingPrice: 7999,
    listedPrice: 8890,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  ////
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l2hwwi80/sunglass/x/z/g/-original-imagdtvcpyb237yn.jpeg?q=50",
    title: "RayBan - UV Glasses",
    sellingPrice: 5799,
    listedPrice: 8290,
    rating: 3,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l2hwwi80/sunglass/t/s/f/-original-imagdtvfugxghug7.jpeg?q=50",
    title: "RayBan - Aviators",
    sellingPrice: 1999,
    listedPrice: 2890,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/k8ho0i80/sunglass/h/u/f/52-0rb2185902-3152-ray-ban-original-imafqhhcbqgrqr4k.jpeg?q=50",
    title: "RayBan - Dotted",
    sellingPrice: 1009,
    listedPrice: 1590,
    rating: 5,
    categoryName: "men",
    freeDelivery: false,
    inStock: false,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l2hwwi80/sunglass/g/v/j/-original-imagdtvegkhze2hk.jpeg?q=50",
    title: "RayBan - Retro square",
    sellingPrice: 7999,
    listedPrice: 8890,
    rating: 1,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },

  // & WOMEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kr0ynbk0/sunglass/t/r/l/as-80493-97-14838-l-aislin-original-imag4wfgsubcytbx.jpeg?q=50",
    title: "AISLIN",
    sellingPrice: 597,
    listedPrice: 2600,
    rating: 4,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  ////
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kr0ynbk0/sunglass/q/c/5/as-3097-85-14758-l-aislin-original-imag4wfjmhfzadjc.jpeg?q=50",
    title: "AISLIN",
    sellingPrice: 1499,
    listedPrice: 2150,
    rating: 3,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kph8h3k0/sunglass/n/5/y/l-chiwm00116-c4-royal-son-original-imag3ph3jkhn2tzv.jpeg?q=50",
    title: "ROYAL PRINCESS",
    sellingPrice: 1000,
    listedPrice: 2000,
    rating: 4,
    categoryName: "women",
    freeDelivery: false,
    inStock: false,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kwdv3bk0/sunglass/v/u/r/-original-imag92ywgjw847jz.jpeg?q=50",
    title: "URBANIC",
    sellingPrice: 700,
    listedPrice: 1000,
    rating: 5,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "GLASSES",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kwdv3bk0/sunglass/b/j/u/-original-imag92ywbm7e7ngf.jpeg?q=50",
    title: "URBANIC",
    sellingPrice: 600,
    listedPrice: 1500,
    rating: 5,
    categoryName: "women",
    freeDelivery: false,
    inStock: false,
    amount: 1,
    productCategory: "GLASSES",
  },

  //BAGS MEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kndi4y80/backpack/k/x/z/stylish-office-bag-laptop-bag-backpack-college-bag-school-bag-original-imag22gra3jcetjf.jpeg?q=50",
    title: "Glodline",
    sellingPrice: 1000,
    listedPrice: 2500,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: false,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/js23pu80/backpack/e/u/u/seek-11895-backpack-wildcraft-original-imafdppay4xu5ej2.jpeg?q=50",
    title: "WILDCRAFT",
    sellingPrice: 1000,
    listedPrice: 2200,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l5bd5zk0/backpack/8/z/y/bl-astro-13-teal-blue-bl-astro-13-teal-blue-laptop-backpack-bl-original-imaggyvvjgwxqph5.jpeg?q=50",
    title: "BL",
    sellingPrice: 1000,
    listedPrice: 1500,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/k7gikcw0/backpack/p/h/e/stylish-25-ltr-backpack-laptop-backpack-for-14-inch-laptop-and-original-imafpzuwbydnpzgt.jpeg?q=50",
    title: "Prolific",
    sellingPrice: 1000,
    listedPrice: 2500,
    rating: 3,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/klv7ekw0/backpack/s/t/4/classic-anti-theft-faux-leather-lbpclslth1901-laptop-backpack-original-imagyw7gt2xmqyz5.jpeg?q=50",
    title: "GEAR",
    sellingPrice: 2000,
    listedPrice: 3500,
    rating: 5,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kv2pk7k0/backpack/d/x/g/crystal-2400009-b-laptop-backpack-eume-original-imag8294dggpwyga.jpeg?q=50",
    title: "EUME",
    sellingPrice: 2300,
    listedPrice: 5000,
    rating: 4,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },

  //WOMEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/khavrm80/backpack/9/v/b/multicolor-cotton-dhurry-girls-backpack-medium-size-astd0366-original-imafxcfdumyepn5n.jpeg?q=50",
    title: "ASRTRID",
    sellingPrice: 1000,
    listedPrice: 1500,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/k41mp3k0/bag/h/b/6/floral-print-canvas-backpack-tiara-25-original-imafnfd76a92dgap.jpeg?q=50",
    title: "TIARA",
    sellingPrice: 600,
    listedPrice: 1200,
    rating: 5,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kvgzyq80/backpack/m/y/i/10-small-12-l-laptop-backpack-small-backpack-cute-style-female-original-imag8d3fevfrzt4t.jpeg?q=50",
    title: "SS Enterprises",
    sellingPrice: 400,
    listedPrice: 2000,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: false,
    amount: 1,
    productCategory: "BAGS",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kqo3onk0/backpack/p/s/w/women-s-polyester-school-backpack-pink-01-backpack-nidimo-original-imag4nfcj4djfwzb.jpeg?q=50",
    title: "Camliine",
    sellingPrice: 1400,
    listedPrice: 2500,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "BAGS",
  },

  // FOOTWEAR MEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kyq62kw0/shoe/v/6/d/10-l-white-10-kraasa-white-original-imagaw3xhytcngzz.jpeg?q=50",
    title: "Kraasa - Sneakers",
    sellingPrice: 500,
    listedPrice: 1000,
    rating: 4,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },


  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kx9as280/shoe/i/k/l/10-5059-white-walkers-brown-original-imag9r82zhvwzgdh.jpeg?q=50",
    title: "White Walkers",
    sellingPrice: 500,
    listedPrice: 1200,
    rating: 3,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/ku5ufm80/shoe/b/v/y/6-mrj1653-aadi-black-original-imag7cstn2dng7tz.jpeg?q=50",
    title: "Aadi Sports",
    sellingPrice: 300,
    listedPrice: 1000,
    rating: 4,
    categoryName: "men",
    freeDelivery: false,
    inStock: false,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/k8xduvk0/shoe/h/a/x/mrj1325-10-aadi-white-original-imafquah45hvgmrf.jpeg?q=50",
    title: "Aadi - Sneakers",
    sellingPrice: 499,
    listedPrice: 900,
    rating: 2,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/jynat8w0/shoe/9/x/5/hero-boot-321-9-aadi-tan-original-imaev4r6yjwqzy5s.jpeg?q=50",
    title: "OMAN - Boots",
    sellingPrice: 700,
    listedPrice: 2000,
    rating: 2,
    categoryName: "men",
    freeDelivery: true,
    inStock: false,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l432ikw0/shoe/w/s/v/-original-imagf2575u9stuwf.jpeg?q=50",
    title: "ADIDAS - Sports",
    sellingPrice: 5000,
    listedPrice: 11000,
    rating: 5,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/ksru0sw0/shoe/l/o/d/7-ajwing-7-magnolia-black-original-imag69jb9r5fydxg.jpeg?q=50",
    title: "Magnolia - Sneakers",
    sellingPrice: 400,
    listedPrice: 1000,
    rating: 3,
    categoryName: "men",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kyq62kw0/shoe/v/6/d/10-l-white-10-kraasa-white-original-imagaw3xhytcngzz.jpeg?q=50",
    title: "REEBOK - Sports",
    sellingPrice: 1500,
    listedPrice: 4200,
    rating: 4,
    categoryName: "men",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },


  //WOMEN
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l5bd5zk0/shoe/o/z/r/-original-imaggygyd8fhzyb2.jpeg?q=50",
    title: "MILESWALKER",
    sellingPrice: 500,
    listedPrice: 1000,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },



  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/ksj9dow0/shoe/d/c/r/7-lo841-7-layasa-pink-original-imag62sxffz2azjn.jpeg?q=50",
    title: "Layasa",
    sellingPrice: 600,
    listedPrice: 1000,
    rating: 4,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kulk9zk0/shoe/v/a/y/5-779-womn-t-rock-multicolor-original-imag7zs5f9yfagkw.jpeg?q=50",
    title: "Dealsforyou - Sneakers",
    sellingPrice: 373,
    listedPrice: 999,
    rating: 3,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/kz065jk0/shoe/l/5/a/4-662-white-t-rock-white-original-imagb3uwpnmyksp3.jpeg?q=50",
    title: "T-ROCK - Sneakers",
    sellingPrice: 400,
    listedPrice: 1000,
    rating: 5,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l5fnhjk0/shoe/e/m/y/-original-imagg3tgtxbqxmgx.jpeg?q=50",
    title: "ASIAN",
    sellingPrice: 490,
    listedPrice: 599,
    rating: 2,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l5jxt3k0/shoe/3/u/p/-original-imagg74fjukursp6.jpeg?q=50",
    title: "CAMPUS",
    sellingPrice: 1119,
    listedPrice: 1299,
    rating: 4,
    categoryName: "women",
    freeDelivery: true,
    inStock: false,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/l4yi7bk0/shoe/a/0/w/-original-imagfqshhkvkggyh.jpeg?q=50",
    title: "PUMA -Sports",
    sellingPrice: 1499,
    listedPrice: 3999,
    rating: 5,
    categoryName: "women",
    freeDelivery: true,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },
  {
    _id: uuid(),
    imageSource:
      "https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/c/l/z/-original-imaggbmdfjhkfugv.jpeg?q=50",
    title: "BIRDE",
    sellingPrice: 299,
    listedPrice: 499,
    rating: 4,
    categoryName: "women",
    freeDelivery: false,
    inStock: true,
    amount: 1,
    productCategory: "FOOTWEAR",
  },

];
