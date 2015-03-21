var Dispatcher = require('flux').Dispatcher;

//Create dispatcher instance
var AppDispatcher = new Dispatcher();

//convenience mehtod to handle dispatch requests
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;