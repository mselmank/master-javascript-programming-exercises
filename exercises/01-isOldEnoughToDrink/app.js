function isOldEnoughToDrink(age) {

    if (age <= 21) {
        console.log("you  dont' have the enough age to drink alcohol")
    } else {

        console.log("you have the enough age to drink alcohol")

    }

    return age;

}

var output = isOldEnoughToDrink(22);
console.log(output);