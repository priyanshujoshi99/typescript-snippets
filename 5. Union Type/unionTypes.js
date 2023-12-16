"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = '55';
var user = {
    name: 'hero',
    id: 12
};
user = {
    username: 'hero2',
    id: 23
};
function getId(id) {
    if (typeof id === "string")
        id.toUpperCase();
    if (typeof id === "number")
        id.toFixed(0);
    console.log('id: ', id);
}
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, '2'];
