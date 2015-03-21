var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {
  //load mock porduct data from localStorage into ProductStore via Action
  getProductData: function() {
    var data = JSON.parse(localStorage.getItem('product'));
    FluxCartActions.recieveProduct(data);
  }

};