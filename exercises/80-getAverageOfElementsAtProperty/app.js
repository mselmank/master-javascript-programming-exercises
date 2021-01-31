function getAverageOfElementsAtProperty(obj, key) {

    return ((obj.key[0] + obj.key[1] + obj.key[2]) / 3);



}



var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2