import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {

    // logic for if card should be doublewide class or regular
    const cardClass = product.doublewide ? 'product-card-wide' : 'product-card';

    // emulating shopfront by decimals ending with zero / working out discounted price
    const discountedPrice = Math.floor((product.price * (1 - product.discount / 100)) * 10) / 10;

    const displayPrice = discountedPrice % 1 === 0 ? discountedPrice.toFixed(0): discountedPrice.toFixed(2);


    return (
        <div className={cardClass}>
            <img className='product-image' src={product.image} alt={product.title}/>
            <div className='product-info'>
                <h2 className='product-title'>{product.title}</h2>
                <p className='discounted-price'>AU ${displayPrice}</p>
                <p className='product-price'>was <del>${product.price.toFixed(2)}</del></p>
                <button className='add-to-cart-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
