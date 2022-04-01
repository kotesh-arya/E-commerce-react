import React from 'react'
import { categories } from '../../../../backend/db/categories';
import '../../../../Colours/colours.css';
import "../CategoryCard/CategoryCard.css"
const CategoryCard =()=> {
return (
<div className="categories">
    {
    categories.map(category=>{
    return <div key={category._id} className="card">
        <img src={category.imageSource} alt="watch" className="card-image" />
        <div className="card-title">{category.categoryName}</div>
    </div>
    })
    }
</div>
)
}

export {CategoryCard}