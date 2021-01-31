// Write your function here

const getElementsThatEqual10AtProperty = (obj, key) => {

    return obj[key].filter(function(item) {
        return item === 10;

    });
}








var obj = {
    key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]