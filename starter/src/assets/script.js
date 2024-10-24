/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation*/
/*   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

//objects array works 
const products = [
  { name: "Strawberries", //string
    price: 5, 
    quantity: 0, //starts at 0
    productId: 0, 
    image: "images/strawberry.jpg",
  },
  { name: "Oranges", 
    price: 6, 
    quantity: 0, 
    productId: 1, 
    image: "images/orange.jpg",
  },
  { name: "Cherries", 
    price: 4, 
    quantity:  0, 
    productId: 2, 
    image: "images/cherry.jpg", //string
  },
];

/* Declare an empty array named cart to hold the items in the cart */

//cart array works
const cart = [
];
/* 
Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart (find a fix)




//helper function 
function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}
*/



//add to cart works
function addProductToCart(productId) {
  //check if in cart 
    if (cart.some((item) => item.productId === productId)) {
      alert("Item already in cart!")
    } else {
      const item = products.find((item) => item.productId === productId);
      
      cart.push({
        ...item,
        quantity : 1
    });
     //console.log(item);
  }
}



/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

//works but price does not increase correctly
let increaseQuantity=(productId) =>{
  const item = cart.findIndex((item) => productId === productId)
  if (item !== 1) {
    cart[productId].quantity++
  } else {
    cart.push({productId, quantity: 1 });
  }
    console.log(item);
  
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart

*/
//works but goes past 0  
function decreaseQuantity(productId) {
  const item = cart.findIndex(item => productId === productId)
  if (item.productId !== 1) {
    cart[productId].quantity--
  } else {
    cart.pop(productId);
  }
}

/*
//remove at zero
function decreaseQuantity(productId) {
  let selectedItem = productId;
  let search = cart.find((x) => x.productId === selectedItem.id);
  
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  cart = cart.filter((x) => x.item !== 0);
};


/*
 Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].productId === productId) {
      cart.splice(i, 1)
    } 
  }
}
/*

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
//works to get total
function cartTotal() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    total += item.price * item.quantity
  }
  return total
}



/* Create a function called emptyCart that empties the products from the cart */
//cart empties with removal of each item not sure how remove all at once works
function emptyCart() {
  for (let i = 0; i < cart.length; i < 1) {
    if (cart[i].productId === products.productId) {
    }
    removeProductFromCart(products);
  }
  
}
/*
//does not work
function emptyCart() {
  const cart = 0;
  cart.length =0; 
  return cart;
}
*/

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
//not tested & incomplete
function pay() {
  let (totalPaid = 0);
  totalPaid += amount;
  let (remaining = totalPaid - cartTotal)();
  if (remaining >= 0) {
    totalPaid = 0;
    emptyCart();
}
   return remaining;
} 



/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
