// Write your function here

const removeElement = (array) => {

    let arr = [] = array;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {

            arr.splice(i, 1);

        }
    }

    return arr;




}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]