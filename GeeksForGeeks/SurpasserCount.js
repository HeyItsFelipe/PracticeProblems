/*
https://practice.geeksforgeeks.org/problems/surpasser-count/0
*/

const surpasserCount = (arrayOfIntegers) => {
    const resultsArray = [];
    for (let i = 0; i < arrayOfIntegers.length - 1; i++) {
        let sumOfSurpassers = 0;
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            if (arrayOfIntegers[i] < arrayOfIntegers[j]) {
                sumOfSurpassers++;
            }
        }
        resultsArray.push(sumOfSurpassers);
    }
    resultsArray.push(0);
    return resultsArray;
};

console.log(surpasserCount([4, 5, 1, 2, 3])); //[1,0,2,1,0]
console.log(surpasserCount([0])); //[0]
console.log(surpasserCount([1, 1, 2])); //[1,1,0]
console.log(surpasserCount([0, 0, 0])); //[0,0,0]

/*
This would be of quadratic time complexity since there are nested
for loops.
*/