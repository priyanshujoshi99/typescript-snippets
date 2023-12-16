"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getNameSentence = function (name) {
    return "The name provided by user is: ".concat(name);
};
function addByTwo(num) {
    return num + 2;
}
var getValue = function (name, email, isValid) {
    if (isValid === void 0) { isValid = false; }
    return "The user is ".concat(isValid ? 'valid' : 'invalid', " with name: ").concat(name, " and email: ").concat(email);
};
function consoleError() {
    console.log("Error in application");
}
consoleError();
console.log('Name: ', getNameSentence("Hero"));
console.log('Sum: ', addByTwo(2));
console.log('Sum: ', getValue("Hero", "hero@gmail.com"));
function handleError(error) {
    throw new Error(error);
}
handleError("hey");
