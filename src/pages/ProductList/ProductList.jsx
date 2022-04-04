import React from 'react';
import { NavBar,Footer } from '../HomePage/HomePageComponents';
import "../../Colours/colours.css";
import "../ProductList/ProductList.css";
import {products} from "../../backend/db/products"
import { CartProductCard } from './CartProductCard';
function ProductList() {
   
return (
<div>
    <NavBar />
    <div className="product-filter-container">

        <div className="filter-section-col">
            <div className="filter-header">
                <h2>Filters</h2>
                <h4>Clear</h4>
            </div>
            <div className="price-slider">
                <div className="slider-ranges">
                    <h3>100</h3>
                    <h3>200</h3>
                    <h3>500</h3>
                    <h3>800</h3>
                    <h3>1000</h3>
                </div>
                <div className="slider-container">
                    <input type="range" min="1" max="1000" className="slider" />
                </div>
            </div>
            <div className="category-container-col">
                <div className="category-one">
                    <input id='category-check-men' className="category-check" type="checkbox" />
                    <label htmlFor='category-check-men'>Men's Fashion</label>
                </div>
                <div className="category-two">
                    <input id='category-check-women' className="category-check" type="checkbox" />
                    <label  htmlFor='category-check-women'>Women's Fashion</label>
                </div>
            </div>
            <ul className="rating-container">
                <li className="rating-item"> <input type="radio" name="rating" id="four-star" /> <label htmlFor='four-star'>4 Star and above</label></li>
                <li className="rating-item"> <input type="radio" name="rating" id="three-star" /> <label htmlFor='three-star'>3 Star and above</label></li>
                <li className="rating-item"> <input type="radio" name="rating" id="two-star" /> <label htmlFor='two-star'>2 Star and above</label></li>
                <li className="rating-item"> <input type="radio" name="rating" id="one-star" /> <label htmlFor='one-star'>1 Star and above</label></li>
            </ul>
            <ul className="sorting-container">
                <li className="sorting-item"> <input type="radio" name="sorting" id='increase' /> <label htmlFor='increase'>High to Low</label></li>
                <li className="sorting-item"> <input type="radio" name="sorting" id='decrease' /> <label htmlFor='decrease'>Low to High</label></li>
            </ul>
        </div>

        <div className="product-section">
            <h1 className="header-large product-header">Showing All Products</h1>
            <div className="product-container">
                {
                products.map( product =>{
                return <CartProductCard  key={product._id} title={product.title} id={product._id} imageSource={product.imageSource} listedPrice={product.listedPrice} sellingPrice={product.sellingPrice} />
                })
                }
            </div>
        </div>
    </div>

</div>
)
}

export {ProductList}