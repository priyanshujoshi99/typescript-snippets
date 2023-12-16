"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFoodType(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    else {
        return "bird food";
    }
}
