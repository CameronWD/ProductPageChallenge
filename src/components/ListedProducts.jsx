import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ListedProducts.css';

const ListedProducts = ({ products }) => {

  // unnecessary but makes products.js fit website format of 2 regular items
  // a wide item by iterating over the array of objects
  
  const organizeProducts = (products) => {
    let wideProducts = products.filter(product => product.doublewide);
    let regularProducts = products.filter(product => !product.doublewide);

    let organizedProducts = [];
    while (wideProducts.length > 0 || regularProducts.length > 0) {
      if (regularProducts.length > 0) {
        organizedProducts.push(regularProducts.shift());
      }
      if (regularProducts.length > 0) {
        organizedProducts.push(regularProducts.shift());
      }
      if (wideProducts.length > 0) {
        organizedProducts.push(wideProducts.shift());
      }
    }
    return organizedProducts; 
  }

  const organizedProducts = organizeProducts(products);

  return (
    <div className='listed-products'>
        {organizedProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
        ))}
    </div>
  );
};

export default ListedProducts;
