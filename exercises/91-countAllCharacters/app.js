// Write your function here

const countAllCharacters = (str) => {

    var a = str.split("");
    var obj = {};
    a.forEach(function(s) {
        var count = 0;
        for (var j = 0; j < a.length; j++) {
            if (s == a[j]) {
                count += 1;
            }
            obj[s] = count;
        }
    });
    return obj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}