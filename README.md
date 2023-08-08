# MVP Product Page Challenge

MVP recreation of the Hismile product page

## Framework

I used Vite to start my React project for this challenge. I have been using this recently for how easy it is to setup a project. Javascript, CSS and HTML were all used to make the page.

## How to Run

1. Download and save in desired location
2. Navigate to challenge folder in terminal
3. `npm run dev`
4. Page should now be shown on the port listed in terminal

## Retrospective

This was my first ever coding challenge so it was both exciting and nerve wracking - an enjoyable experience. 

I think overall I did a pretty good job of making a responsive MVP in the time I spent on the challenge. 

### Successes

 I decided that I would seed the cards with a product.js array of objects that would have the title, price, discount, image and the doublewide value. 

`{ title: 'Product 11', price: 50.55, discount: 15, image: Image11, doublewide: true}`

ListedProducts.jsx was used to organize the product list so that it would follow the style of the live website with two normal sized products before having the wide product. Creating the new organizedProducts to be used for making the ProductCards. 

This also meant that I could use different discounted rates for different products in the product.js really easily and it would automatically update the product cards. 

I also added a math floor to the discountedPrice to emulate how the live site does not display decimal points that end in numbers other than zero.  





