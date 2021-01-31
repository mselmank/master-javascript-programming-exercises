// Write your function here

const getFirstElementOfProperty = (obj, key) => {

    if (Array.isArray(obj[key]) === false) {
        return undefined;
    } else if (obj[key][0] === undefined) {
        return undefined;
    } else {
        return obj[key][0];

    }
}
















var obj = {
    key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);