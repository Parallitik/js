'use strict'


// EcmaScript5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype. = function() {
    this.price = this.price - (this.price / 100 * 25);
}

const product1 = new Product('футболка', 200);
console.log(product1);
product1.make25PercentDiscount();
console.log(product1);

// EcmaScript6  Закомментировал для удобства

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     make25PercentDiscount() {
//         this.price = this.price - (this.price / 100 * 25);
//     }
// }

// const product1 = new Product('футболка', 200);
// console.log(product1);
// product1.make25PercentDiscount();
// console.log(product1);