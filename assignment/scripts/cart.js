console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Basket is an empty array
let basket = [];

// ----------------------------------------

// addItem is a function to add items to basket
let addItem = (item) => {
  if (item) {
    basket.push(item);
    return basket && true;
  } else return false;
};

// Test the functions and results
console.log(addItem()); // false
console.log(addItem(['shoes', 'hat', 'jacket'])); // true
console.log('basket', basket); // let me see those basket items!

// ----------------------------------------

// listItems to loop through basket and list the items!
let listItems = (basket) => {
  for (let i = 0; i < basket.length; i++) {
    console.log('Basket item:', basket[i]);
  }
};
// Test the functions and display basket items
console.log(listItems(['shoes', 'hat', 'jacket'])); // true

// empty function to make items disappear
let empty = (basket) => {
  // check if the basket has items
  console.log(basket);
  if (basket.length != 0) {
    // if it does have items, return an empty array;
    return [];
  }
};

// Test the functions and display no items
console.log(empty(['shoes', 'hat', 'jacket']));

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
