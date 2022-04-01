import React from 'react'
function CartProduct({imageSource,cartItemTitle,price}) {
return (
<div className="cart-card">

    <img className="horizontal-card-image hat " src={imageSource} />
    <div className="image-card-content-col">
        <div className="card-content">
            <div className=" cart-card-title">
                {cartItemTitle}
            </div>
            <div className="card-content price">
                <h2>Rs.{price} <strike><span className="light-text">Rs.200</span></strike> </h2>
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
)
}

export {CartProduct}