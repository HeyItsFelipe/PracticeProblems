/*
https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1
*/

const findTriplets = (arrayOfIntegers) => {
    let i = 0;
    let j = i + 1;
    let k = i + 2;
    if (arrayOfIntegers.length < 3) {
        return false;
    }
    for (k; k < arrayOfIntegers.length; k++) {
        if (arrayOfIntegers[i] + arrayOfIntegers[j] + arrayOfIntegers[k] === 0) {
            return true;
        }
    }
    for (j; j < arrayOfIntegers.length - 1; j++) {
        if (arrayOfIntegers[i] + arrayOfIntegers[j] + arrayOfIntegers[k] === 0) {
            return true;
        }
    }
    for (i; i < arrayOfIntegers.length - 2; i++) {
        if (arrayOfIntegers[i] + arrayOfIntegers[j] + arrayOfIntegers[k] === 0) {
            return true;
        }
    }
    return false;
};

console.log(findTriplets([0, -1, 1]));  //true
console.log(findTriplets([]));  //false
console.log(findTriplets([1, 2, 3]));  //false
console.log(findTriplets([0, -1, 2, -3, 1]));  //true

/*
This would be of linear time complexity.  We have three for loops, one after another.
None of the for loops are nested.  This would be O(3n), but we drop the coefficient,
making this O(n).
*/