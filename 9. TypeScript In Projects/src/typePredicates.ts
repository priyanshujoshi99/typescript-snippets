type Fish = { swim(): void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFoodType(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "fish food";
    } else {
        return "bird food";
    }
}
