// Write your function here

const select = (property, obj) => {

    let result = {};
    array = [];
    hash = {};

    arr.forEach(function(v) { // iteramos sobre cada elemento del array "arr".
        Object.keys(obj).some(function(c) { // revisamos que sean las property del objeto sean iguales a los elementos del arr.
            if (v == c) {
                hash[v] = obj[c]; // si son iguales asignalo en el nuevo obj hash .

            }

        });



    });

    return hash;
}



var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output);