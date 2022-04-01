import React from 'react'
import { NavBar,Footer } from '../HomePage/HomePageComponents';
import "../../Colours/colours.css";
import "../Cart/Cart.css"
import { cartItems } from '../../backend/db/cart-items';
import{CartProduct} from "../Cart/CartProduct"
function Cart() {
return (

<div>

    <NavBar />

    <div className="cart-container">

        <h1 className="cart-header">My Cart</h1>
        <div className="item-price-container-row">
            {
            cartItems.map(item=>{
            return <CartProduct key={item._id} imageSource={item.imageSource} title={item.title} price={item.price} />

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