function isOldEnoughToDrive(age) {

    if (age <= 16) {
        console.log("you  dont' have the enough age to drive")
    } else {

        console.log("you have the enough age to drive")

    }

    return age;


}


var output = isOldEnoughToDrive(22);
console.log(output);