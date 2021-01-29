function checkAge(name, age) {
    // your code here

    if (age <= 21) {

        console.log("Para la casa!" + name);

    } else {

        console.log('Bienvenido' + name);

    }

}

var output = checkAge('Adrian', 22);
console.log(output); // --> '¡BIenvenido Adrian!'