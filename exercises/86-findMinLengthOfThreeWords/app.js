// Write your function here

const findMinLengthOfThreeWords = (str) => {

    var str = str.split('');
    var x = [];
    var y = 0;

    for (let i = 0; i < str.length; i++) {

        x = str[i];

        if (y == 0 || x.length < y) {
            y = str[i].length;

        };


    };

    //str.forEach(element => (element));

    return y;

}


var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1