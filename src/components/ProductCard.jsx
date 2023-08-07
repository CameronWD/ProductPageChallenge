import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const cardClass = product.doublewide ? 'product-card-wide' : 'product-card';

    // emulating shopfront by decimals ending with zero 
    const discountedPrice = Math.floor((product.price * (1 - product.discount / 100)) * 10) / 10;

    return (
        <div className={cardClass}>
            <img className='product-image' src={product.image} alt={product.title}/>
            <div className='product-info'>
                <h2 className='product-title'>{product.title}</h2>
                <p className='product-price'>AU ${discountedPrice.toFixed(2)}</p>
                <p className='former-price'>was <del>${product.price.toFixed(2)}</del></p>
                <button className='add-to-cart-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
