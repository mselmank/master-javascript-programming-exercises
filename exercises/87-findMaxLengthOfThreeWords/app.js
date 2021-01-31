const findMaxLengthOfThreeWords = (w1, w2, w3) => {

    return Math.max(w1.length, w2.length, w3.length);
}




var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);