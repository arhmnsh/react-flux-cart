var keyMirror = require('react/lib/keyMirror');

//define action constants
module.exports = keyMirror({
  CART_ADD: null, //adds item to cart
  CART_REMOVE: null, //remove item form cart
  CART_VISIBLE: null, //shows or hides the cart
  SET_SELECTED: null, //selects a product option
  RECIEVE_DATA: null, //loads our mock data
});