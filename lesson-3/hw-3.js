'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(product) {
    product.price = product.price / 100 * 85;
})

console.log(products);

//  Реализация через метод Map

// закомментированный код работает, скидка применяется, но не могу понять почему не возвращается новый массив productsWthDiscount со скидочными данными,
// а меняются данные в основном массиве products после строки №30. При этом productsWthDiscount в итоге - undefined

// const productsWthDiscount = products.map(function(product){
//     product.price = product.price / 100 * 85;
//     return product;
// });

// console.log(products);
// console.log(productsWthDiscount);