const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(carsObj) {
    this.cart.push(carsObj);
    this.total += carsObj.price
  },

  removeFromCart: function(index, carPrice) {
    var newCart = this.cart.slice(0);
    newCart.splice(index, 1);
    this.cart = newCart;
    this.total -= carPrice
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};