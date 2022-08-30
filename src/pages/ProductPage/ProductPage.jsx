import React, { useEffect, useState } from "react";
import { NavBar } from "../HomePage/HomePageComponents/NavBar/NavBar";
import ProductPageCSS from "../ProductPage/ProductPage.module.css";
// import { useProducts } from "../../contexts/productContext";
// import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { Modal } from "../../pages/Modal";
import { useProducts } from "../../contexts/productContext";
import { SuggestionCard } from "../ProductPage/SuggestionCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function ProductPage() {
  const { dispatch, cart } = useCart();
  const { productId } = useParams();
  const { wishlist, wishlistDispatch, isModalOpen } = useWishlist();
  const [singleProduct, setSingleProduct] = useState({});
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  const getSingleProduct = async () => {
    const response = await axios.get(`/api/products/${productId}`);
    setSingleProduct(response.data.product);
  };
  const { allProducts } = useProducts();
  const filteredProducts = allProducts.filter(
    (product) =>
      product._id !== singleProduct._id &&
      product.productCategory === singleProduct.productCategory
  );
  // console.log(filteredProducts);
  const suggestedProducts = filteredProducts.slice(0, 4);

  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  return (
    <div>
      <NavBar />
      <div>
        <div className={ProductPageCSS["single-product-container"]}>
          <div className={ProductPageCSS["product-image-container"]}>
            <img
              className={ProductPageCSS["product-image"]}
              src={singleProduct.imageSource}
            />
          </div>
          <div className={ProductPageCSS["single-product-content"]}>
            {/* <div className=" cart-card-title"> */}
            <h1 className={ProductPageCSS["product-title"]}>
              {singleProduct.title}
            </h1>
            {/* </div> */}
            <div className={ProductPageCSS["product-rating"]}>
              {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
            </div>
            <div className={ProductPageCSS["product-price-details"]}>
              <h2>
                Rs.{singleProduct.sellingPrice}{" "}
                <strike>
                  <span className={ProductPageCSS["light-text"]}>
                    Rs.{singleProduct.listedPrice}
                  </span>
                </strike>{" "}
              </h2>
              <h3>
                (
                {Math.round(
                  calculateDiscount(
                    singleProduct.listedPrice,
                    singleProduct.sellingPrice
                  )
                )}
                % OFF)
              </h3>
            </div>
            <div className={ProductPageCSS["product-description"]}>
              <p>
                A product description is a form of marketing copy used to
                describe and explain the benefits of your product. In other
                words, it provides all the information and details of your
                product on your ecommerce site. These product details can be one
                sentence, a short paragraph or bulleted. They can be serious,
                funny or quirky. They can be located right next to or underneath
                product titles and product images. They can be scannable selling
                points or have strong readability. There are multiple styles and
                ways to make product descriptions work for your ecommerce store,
                but there’s much more to them than simple copywriting.
              </p>
            </div>
            <div className={ProductPageCSS["product-content-buttons"]}>
              <button
                className={`btn btn-primary ${ProductPageCSS["add-to-cart"]}`}
                onClick={() => {
                  if (cart.some((item) => item.id === singleProduct._id)) {
                    console.log(
                      "item exists in cart increase it quantity there"
                    );
                    // dispatch({
                    //   type: "PRE_EXISTED_ITEM",
                    //   payload: singleProduct.title,
                    // });
                    toast.info("Item already exists in Cart", {
                      position: "bottom-center",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  } else {
                    console.log("add to cart!!");
                    dispatch({
                      type: "ADD_TO_CART",
                      item: {
                        id: singleProduct._id,
                        title: singleProduct.title,
                        imageSource: singleProduct.imageSource,
                        listedPrice: singleProduct.listedPrice,
                        sellingPrice: singleProduct.sellingPrice,
                        rating: singleProduct.rating,
                        instock: singleProduct.inStock,
                        amount: singleProduct.amount,
                      },
                    });
                    toast.info("Item added to Cart", {
                      position: "bottom-center",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                }}
              >
                Add to cart
              </button>
              <button
                className={`btn btn-primary ${ProductPageCSS["product-button"]}`}
                onClick={() => {
                  if (wishlist.some((item) => item.id === singleProduct._id)) {
                    console.log(
                      "item exists in wishlist, increase it quantity there"
                    );
                    // wishlistDispatch({
                    //   type: "PRE_EXISTED_WISHLIST_ITEM",
                    //   payload: singleProduct.title,
                    // });
                    toast.info("Item already exists in Wishlist", {
                      position: "bottom-center",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  } else {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      item: {
                        id: singleProduct._id,
                        title: singleProduct.title,
                        imageSource: singleProduct.imageSource,
                        listedPrice: singleProduct.listedPrice,
                        sellingPrice: singleProduct.sellingPrice,
                        rating: singleProduct.rating,
                        instock: singleProduct.inStock,
                        amount: singleProduct.amount,
                      },
                    });
                    toast.info("Item added to Wishlist", {
                      position: "bottom-center",
                      autoClose: 3000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                }}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal />}
      <div className={ProductPageCSS["suggested-products-container"]}>
        <h2>Similar Products you may like</h2>
        <div className={ProductPageCSS["suggested-products-section"]}>
          {suggestedProducts.map((product) => {
            return (
              <Link
                className={ProductPageCSS["suggestion-link-card"]}
                to={`/Product/${product._id}`}
                key={product._id}
              >
                <SuggestionCard
                  imageSource={product.imageSource}
                  title={product.title}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { ProductPage };
