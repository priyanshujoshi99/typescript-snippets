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
    protected courseCount: number = 1;
    constructor(private name: string, private email: string) {}

    get getEmail(): string {
        return this.email;
    }

    get getName(): string {
        return this.name;
    }

    set setEmail(email: string) {
        this.email = email;
    }

    set setName(name: string) {
        this.name = name;
    }
}

const user = new User("h", "h@h.com");
console.log("email", user.getEmail);

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this.courseCount = 4;
    }
}
