"use strict";
function identityOne(value) {
    return value;
}
function identityTwo(value) {
    return value;
}
// function identityThree<Type>(value: Type): Type {
//     return value;
// }
function identityThree(value) {
    return value;
}
identityThree(3);
// -----------------------------------------------------------------
/* ---- Generics in array and arrow functions ---- */
// -----------------------------------------------------------------
function getSearchProducts(products) {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}
// const getSearchProductsArrowFn = <T, >(products: T[]): T => { -> here <T,> denotes that it is a generic component not jsx
//     const myIndex = 4;
//     return products[myIndex];
// };
const getSearchProductsArrowFn = (products) => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};
const anotherFunction = (valOne, valTwo) => {
    return { valOne, valTwo };
};
anotherFunction("3", {
    connection: "TCP",
    username: "johnDoe",
    password: "1233"
});
// -----------------------------------------------------------------
class Quiz {
    constructor(totalMarks, type) {
        this.totalMarks = totalMarks;
        this.type = type;
    }
}
class ECommerce {
    constructor() {
        this.products = [];
    }
    addToCart(product) {
        return this.products.push(product);
    }
}
let amazon = new ECommerce();
let product = new Quiz(100, "regular");
amazon.addToCart(product);
