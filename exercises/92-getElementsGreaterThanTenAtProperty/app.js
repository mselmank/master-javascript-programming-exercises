// Write your function here

const getElementsGreaterThan10AtProperty = (obj, key) => {

    return obj[key].filter(function(item) {
        return item >= 10;

    });
}










var obj = {
    key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]