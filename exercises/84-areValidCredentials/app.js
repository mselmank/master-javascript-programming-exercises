// Write your function here


const areValidCredentials = (user, pass) => {

    if (user.length > 3 && pass.length >= 8) return true; {
        return false;
    }


}







var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero