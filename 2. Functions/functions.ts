const getNameSentence = (name: string): string => {
    return `The name provided by user is: ${name}`;
};

function addByTwo(num: number): number {
    return num + 2;
}

const getValue = (name: string, email: string, isValid: boolean = false) => {
    return `The user is ${
        isValid ? "valid" : "invalid"
    } with name: ${name} and email: ${email}`;
};

const value = {
    name: "hero",
    email: "hero@mail.com"
};

const getName = ({ name }: { name: string }): string => {
    return name;
};

getName(value);

function consoleError(): void {
    console.log("Error in application");
}

consoleError();

console.log("Name: ", getNameSentence("Hero"));
console.log("Sum: ", addByTwo(2));
console.log("Sum: ", getValue("Hero", "hero@gmail.com"));

function handleError(error: string): never {
    throw new Error(error);
}
handleError("hey");

export {};
