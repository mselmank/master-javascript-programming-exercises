// Write your function here
const getElementsLessThan100AtProperty = (obj, key) => {



    return obj[key].filter(function(item) {
        return item <= 100;

    });
}















var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]