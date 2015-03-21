window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI.js');
var FluxCartApp = require('./components/FluxCartApp.react');

//load mock product data into localstorage
ProductData.init();

//load mock API call
CartAPI.getProductData();

//render FluxCartApp Controller View
React.render(
  <FluxCartApp />, document.getElementById('flux-cart')
);