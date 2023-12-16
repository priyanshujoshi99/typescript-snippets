function identityOne(value: string): string {
    return value;
}

function identityTwo(value: any): any {
    return value;
}

// function identityThree<Type>(value: Type): Type {
//     return value;
// }

function identityThree<T>(value: T): T {
    return value;
}

identityThree(3);

// -----------------------------------------------------------------

/* ---- Generics in array and arrow functions ---- */

// -----------------------------------------------------------------

function getSearchProducts<T>(products: Array<T>): T {
    // do some db operations
    const myIndex = 3;
    return products[myIndex];
}

// const getSearchProductsArrowFn = <T, >(products: T[]): T => { -> here <T,> denotes that it is a generic component not jsx
//     const myIndex = 4;
//     return products[myIndex];
// };

const getSearchProductsArrowFn = <T>(products: T[]): T => {
    // do some db operations
    const myIndex = 4;
    return products[myIndex];
};

// -----------------------------------------------------------------

/* ---- Generic Classes ---- */

// -----------------------------------------------------------------

interface Database {
    connection: string;
    username: string;
    password: string;
}

const anotherFunction = <T, U extends Database>(
    valOne: T,
    valTwo: U
): object => {
    return { valOne, valTwo };
};

anotherFunction("3", {
    connection: "TCP",
    username: "johnDoe",
    password: "1233"
});

// -----------------------------------------------------------------

class Quiz {
    constructor(public totalMarks: number, public type: string) {}
}

class ECommerce<T> {
    products: T[] = [];

    addToCart(product: T) {
        return this.products.push(product);
    }
}

let amazon = new ECommerce();
let product = new Quiz(100, "regular");
amazon.addToCart(product);
