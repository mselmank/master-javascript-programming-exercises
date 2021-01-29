function isOldEnoughToDrinkAndDrive(age) {
    // your code here

    if (age <= 21) {
        console.log("you  dont' have the enough age to drive and drink.")
    } else {

        console.log("you have the enough age to drive.")

    }

    return age;


}


var output = isOldEnoughToDrinkAndDrive(22);
console.log(output);