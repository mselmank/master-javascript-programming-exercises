// Write your function here

const getAllElementsButNth = (array, element) => {

    array.splice(element, 1);

    return array;





}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']