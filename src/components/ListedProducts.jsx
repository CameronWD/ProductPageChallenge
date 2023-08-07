import React from 'react'
import ProductCard from './ProductCard'
import '../styles/ListedProducts.css';

const ListedProducts = ({ products }) => {
  return (
    <div className='listed-products'>
        {products.map((product) => (
            <ProductCard key={product.title} product={product} />
        ))}
        </div>
  )
}

export default ListedProducts