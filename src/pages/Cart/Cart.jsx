import React from 'react'
import { NavBar } from '../HomePage/HomePageComponents/NavBar/NavBar';
import {Footer} from '../HomePage/HomePageComponents/Footer/Footer';
import "../../Colours/colours.css";
import "../Cart/Cart.css"
import { cartItems } from '../../backend/db/cart-items';

function Cart() {
return (

<div>

    <NavBar />
    
    <div className="cart-container">

        <h1 className="cart-header">My Cart</h1>
        <div className="item-price-container-row">
            {
            cartItems.map(item=>{
            return <div className="cart-card">

                <img className="horizontal-card-image hat " src={item.imageSource} />
                <div className="image-card-content-col">
                    <div className="card-content">
                        <div className=" cart-card-title">
                            {item.cartItemTitle}
                        </div>
                        <div className="card-content price">
                            <h2>Rs.{item.price} <strike><span className="light-text">Rs.2000</span></strike> </h2>
                            <h3>(75% off)</h3>
                        </div>
                        <div className="quantity-setting">
                            <p>Quantity:</p>
                            <button className="btn-counter">-</button>
                            <input className="quantity-input" type="text" />
                            <button className="btn-counter">+</button>
                        </div>
                        <button className="btn btn-primary max-width-btn">Remove from cart</button>

                        <button className="btn outline-primary max-width-btn">Move to Wishlist</button>
                    </div>
                </div>
            </div>

            })
            }
            <div className="card cart-price-detail-card">
                <div className="price-card-title">
                    <h1 className="header-small">PRICE DETAILS</h1>
                    

                </div>
                <hr />
                <div className="card-content">
                    <div className="price-calculation-container">
                        <ul className="text">
                            <li className="price-card-item">Price (2 Items)</li>
                            <li className="price-card-item">Discount</li>
                            <li className="price-card-item">Delivery charges</li>
                        </ul>
                        <ul className="charges">
                            <li className="price-card-item">Rs.4000/-</li>
                            <li className="price-card-item">-Rs.1500/-</li>
                            <li className="price-card-item"> Rs.100/-</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="final-price">
                        <h2 className="header-medium">TOTAL AMOUNT:</h2>
                        <h2 className="header-medium">Rs.2600/-</h2>
                    </div>
                    <hr />
                    <div className="money-save-text">
                        <h2>You will save RS.1500/- on this order</h2>
                    </div>
                </div>
                <button className="btn btn-primary">PLACE ORDER</button>
            </div>

        </div>

    </div>
  
  <Footer/>

</div>

)
}

export {Cart}