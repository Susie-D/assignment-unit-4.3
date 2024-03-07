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
console.log('Basket items', basket); // let me see those basket items!

// ----------------------------------------

// listItems to loop through basket and list the items!
let listItems = (basket) => {
  for (let i = 0; i < basket.length; i++) {
    console.log('Basket has these items:', basket[i]);
  }
};
// Test the functions and display basket items
// console.log('List items', listItems(basket)); // true

// Example test
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
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
  return console.log('Removed items:', basket);
};
//};

// Test the functions and display no items
console.log('Empty Basket', empty(['shoes', 'hat', 'jacket']));
console.log('Another Empty Basket', empty([]));

// ----------------------------------------

// STRETCH
// Add a global const named maxItems and set it to 5.
const maxItems = 5;

// Create a function called isFull().
let isFull = () => {
  if (basket.length === maxItems) {
    // check the items
    console.log('Basket items #', basket.length);
    console.log('maxItem', maxItems);
    return true;
  } else if (basket.length > maxItems || basket.length === 0) {
    // console.log('Basket items #', basket);
    return false;
  }
};
// Test max items
console.log(
  'Full && true',
  isFull(['shoes', 'jacket', 'shirt', 'hat', 'gloves'])
); // full, true -- this SHOULD BE WORKING?! WHHHHY!?
console.log('Not full && false', isFull(['shorts', 'pants', 'skirt'])); // not full, false

// STRETCH: `addItem` function updated to use `isFull` and return `false` when full
// STRETCH: `removeItem` function removes & returns the first matching item from `basket`
// STRETCH: `removeItem` function returns null when item is not found

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
