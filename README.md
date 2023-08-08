# MVP Product Page Challenge

MVP recreation of the Hismile product page

## Framework

I used Vite to start my React project for this challenge. I have been using this recently for how easy it is to set up a project. Javascript, CSS and HTML were all used to make the page.

## How to Run

1. Download and save in desired location
2. Navigate to challenge folder in terminal
3. `npm install`
4. `npm run dev`
5. Page should now be shown on the port listed in terminal

## Retrospective

This was my first ever coding challenge so it was both exciting and nerve wracking - it was a very enjoyable experience. 

I feel I did a good job of making a responsive MVP in the time I spent on the challenge. 

### Successes

 I decided that I would seed the cards with a product.js array of objects that would have the title, price, discount, image and the doublewide value. 

`{ title: 'Product 11', price: 50.55, discount: 15, image: Image11, doublewide: true}`

ListedProducts.jsx was used to organize the product list so that it would follow the style of the live website -  two regular sized products before having the wide product. Creating the new organizedProducts to be used for making the ProductCards. 

This also meant that I could use different discounted rates for different products in the product.js easily and it would automatically update the product cards. 

I also added a math.floor() to the discountedPrice to emulate how the live site does not display decimal points that end in numbers other than zero.  


### Challenges

I was aware of managing my time for this challenge and decided to not do the optional pill design for the cards. 

With a little bit more time I would have adjusted the product info for the double wide cards so that the "Add to Cart" was on the right side of the card and the info on the left, similar to how the live website looks. I think my solution is still effective but could maybe be improved. 

### Conclusion 

The MVP Product Page was a fun experience that allowed me to further develop some skills I have learnt but also has got me excited to learn and develop my skills more. While some of the solutions for the problems I came up with are effective, I am always curious about other ways results can be achieved and how the scale of a site may change how effective certain solutions are. 



