import React from 'react'
import { trending } from '../../../../backend/db/trending'
import '../../../../Colours/colours.css';
import "../TrendingCard/TrendingCard.css"
function TrendingCard() {
return (
<div className="trending-container">
    {
    trending.map(item=>{
    return <div className="trending-card">
        <img className="horizontal-card-image " src={item.imageSource} />
        <div className="card-content">
            <div className=" trend-card-title">
                {item.trendingTitle}
            </div>
            {item.description}
            <footer className="footer">
                <button className="card-footer-link" href="#">Add to wishlist</button>
                <button className="card-footer-link-buy" href="#">Buy Now</button>
            </footer>
        </div>
    </div>

    })
    }
</div>
)
}

export {TrendingCard}