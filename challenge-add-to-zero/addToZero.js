// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below: 

function addToZero(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
    // We need to make sure that the 0 doesn't get added to itself
            if (i !== j) {
                if(array[i] + array[j] === 0) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(addToZero(array));

//alternate solution from instructor
const addToZeros = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array [j] === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZeros(array))