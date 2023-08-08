import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ListedProducts.css';

const ListedProducts = ({ products }) => {

  // logic for products.js to fit website format of 2 regular items
  // a wide item by iterating over the array of objects
  // product.js can be updated/changed and the layout should remain the same

  const organizeProducts = (products) => {
      const wideProducts = [...products.filter(product => product.doublewide)];
      const regularProducts = [...products.filter(product => !product.doublewide)];
  
      const organizedProducts = [];
        while (wideProducts.length > 0 || regularProducts.length > 0) {
          const nextProducts = [...(regularProducts.splice(0, 2)), ...wideProducts.splice(0, 1)];
          organizedProducts.push(...nextProducts);
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
