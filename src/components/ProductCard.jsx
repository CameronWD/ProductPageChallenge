import React from 'react'
import '../styles/ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
        <img className='product-image' src={product.image} alt={product.title}/>
        <div className='product-info'>
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-price'>AU ${product.price}</p>
            <p className='former-price'>was <del>${product.formerPrice}</del></p>
            <button className='add-to-cart-button'>Add to Cart</button>
        </div>

    </div>
  )
}

export default ProductCard