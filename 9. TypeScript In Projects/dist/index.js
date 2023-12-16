"use strict";
console.log("TypeScript is here!");
// class User {
//     email: string;
//     name: string;
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courseCount = 1;
    }
    get getEmail() {
        return this.email;
    }
    get getName() {
        return this.name;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setName(name) {
        this.name = name;
    }
}
const user = new User("h", "h@h.com");
console.log("email", user.getEmail);
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 4;
    }
}
