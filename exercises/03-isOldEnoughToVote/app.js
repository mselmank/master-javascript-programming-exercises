function isOldEnoughToVote(age) {
    // your code here

    if (age <= 18) {
        console.log("you  dont' have the enough age to Vote.")
    } else {

        console.log("you have the enough age to Vote.")

    }

    return age;


}


var output = isOldEnoughToVote(17);
console.log(output);