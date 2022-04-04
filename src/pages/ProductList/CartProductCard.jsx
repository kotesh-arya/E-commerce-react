import React from 'react'
function CartProductCard({title,imageSource,listedPrice,sellingPrice}) {

const calculateDiscount = (initialPrice,sellingPrice)=>{
return ((initialPrice - sellingPrice )/ initialPrice) *100
}

return ( <div  className="card badge-card">
    <div className="image-icon-container">

        <img src="https://img.icons8.com/ios/50/000000/like--v1.png" className="stacked-icon" alt="heart-icon"
            srcSet="" />

        <div className="product-image-container">
            <img className="product-image" src={imageSource} />
        </div>
    </div>

    <div className="product-card-content">
        <div className="product-card-title">
            {title}
        </div>
        <div className="card-content">
            Rs.{sellingPrice} <strike>Rs.{listedPrice}</strike>
            ({Math.round(calculateDiscount(listedPrice,sellingPrice))}% OFF)
        </div>
        <footer className="footer">
            <a href="">MOVE TO CART</a>
        </footer>
    </div>
</div>)
}

export {CartProductCard}