console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Basket is an empty array
let basket = [];

// ----------------------------------------

// STRETCH
// Add a global const named maxItems and set it to 5.
const maxItems = 5;

// Create a function called isFull(). It should:
//  1) return false if the basket contains less than max number of items
//  2) return true otherwise (equal or more than maxItems)

// Why not let!?
// let isFull2 = function () {
//   // let something = 'whatever';
//   return
// }

let isFull = () => {
  if (basket.length < maxItems) {
    // check the items
    // console.log('Basket items #', basket.length);
    // console.log('maxItem', maxItems);
    return false;
  }
  return true;
};

// addItem is a function to add items to basket

addItem = (item) => {
  if (item && !isFull()) {
    basket.push(item);
    return true;
  }
  return false;
};

// Test the functions and results
// console.log(addItem()); // false
// console.log(['shoes', 'hat', 'jacket'].forEach(item => addItem(item))); // true
// console.log('Basket items', basket); // let me see those basket items!

// ----------------------------------------

// listItems to loop through basket and list the items!
// let listItems = () => {
//   // check if the basket has items
//   console.log('Basket', basket);
//   for (let i = 0; i < basket.length; i++) {
//     do {
//       console.log('Basket has these items:', basket[i].toString());
//     } while (basket.length !== 0);
//   }
//   // STOP DOING THIS!!! :)
//   // return console.log('Removed items:', basket);
//   basket.pop();
//   return basket;
// };

listItems = () => {
  for (let i = 0; i < basket.length; i++) {
    console.log('Basket has these items:', basket[i]);
  }
  return basket;
};

//Test the functions and display basket items
listItems();

// Example test
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log(`Basket is now ${basket}`);

// ----------------------------------------

// empty function to make items disappear
let empty = () => {
  // check if the basket has items
  // console.log('Basket', basket);
  for (let i = 0; i < basket.length; i++) {
    do {
      basket.pop(basket[i]);
    } while (basket.length !== 0);
  }
  // STOP DOING THIS!!! :)
  // return console.log('Removed items:', basket);
  return basket;
};
//};

// Test the functions and display no items
console.log('Empty Basket', empty(['shoes', 'hat', 'jacket']));
console.log('Another Empty Basket', empty([]));

// ----------------------------------------

// STRETCH: `addItem` function updated to use `isFull` and return `false` when full
// *** SEE ABOVE ***

// STRETCH: `removeItem` function removes & returns the first matching item from `basket`

removeItem = (item) => {
  let basketIndex = basket.indexOf(item);
  // Use Array.indexOf to find the index of the first matching item in the basket.
  if (basketIndex >= 0) {
    // Use Array.splice to remove the first matching item from the basket.
    basket.splice(basketIndex, basketIndex);
    return item;
  }
};

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== 'undefined' ? basket : undefined,
    addItem: typeof addItem !== 'undefined' ? addItem : undefined,
    listItems: typeof listItems !== 'undefined' ? listItems : undefined,
    maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
    empty: typeof empty !== 'undefined' ? empty : undefined,
    isFull: typeof isFull !== 'undefined' ? isFull : undefined,
    removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
