// const User = {
//     name: 'Hero',
//     email: 'hero@mail.com',
//     isActive: true
// }

// let newUser = {name: 'hero', isPaid: false, email: 'hero1@mail.com'}
// createUser(newUser);


function createCourse(): {name: string, price: number} {
    return {name: 'react', price: 399};
}

/* --------- type alias --------- */

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser (user: User) {}

/* --------- read only --------- */

type Person = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

let myPerson: Person = {
    _id: "123",
    name: "Hero",
    email: 'hero@mail.com',
    isActive: false
}

myPerson.name = "Super Hero";
// myPerson._id="234"; -> Not allowed

/* --------- combining type --------- */

type CardNuumber = {
    cardNo: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNuumber & CardDate

let card : CardDetails = {
    cardNo: "12",
    cardDate: "2023"
}

export { };
