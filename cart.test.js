let cart = require('./cart');
let cars = require('./data/cars');



describe('Cart Properties', () => {

    test('Cart should default to an empty array', () => {
        var result = false;
        if(Array.isArray(cart.cart)){
            if(cart.cart.length === 0){
              result = true;
            }
        }
        expect(result).toBe(true);
    })

    test('Total should default to 0', () => {
        expect(cart.total).toBe(0)
    })
})

describe('Cart Methods', () => {

    afterEach(() => {
        cart.total = 0;
        cart.cart = [];
    })

    test('addToCart(carsObj) should add to the end of the cart array', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[1]).toEqual(cars[1]);
    })

    test('addToCart(carsObj) should increase total by added cars price', () => {
        cart.addToCart(cars[0]);

        expect(cart.total).toBe(8605);
    })

    test('removeFromCart(1, 48539) should decrease by cart length by 1 and lower total to 8605', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);
        cart.removeFromCart(1, cars[1].price)

        expect(cart.cart.length).toBe(2);
        expect(cart.cart[1]).toBe(cars[2]);
    })

    test('removeFromCart(1, 48539) should decrease total to 29314', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2])
        cart.removeFromCart(1, cars[1].price)

        expect(cart.total).toBe(cars[0].price + cars[2].price)
    })

    test('checkout() should empty the cart and reset the total', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.checkout();

        expect(cart.total).toBe(0);
        expect(cart.cart.length).toBe(0)
    })

})