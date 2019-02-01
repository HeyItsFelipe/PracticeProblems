/*
https://www.geeksforgeeks.org/counting-inversions/
*/

const inversionsCount = (arrayOfIntegers) => {
    let inversions = 0;
    for (let i = 0; i < arrayOfIntegers.length - 1; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            if (arrayOfIntegers[i] > arrayOfIntegers[j]) {
                inversions++;
            }
        }
    }
    return inversions;

}

/*
Naive Iteration Method.
This would be of O(n^2) time complexity and O(1) space complexity.
We have two loops nested one in another creating that O(n^2) time complexity.
No additional storage is needed, as we are searching in place, so it will be an O(1) space complexity.
*/

const inversionsCount2 = (arrayOfIntegers) => {

    const merge = (sortedLeft, sortedRight) => {
        let sortedResult = [];
        let i = 0;
        let j = 0;
        let inv_count = 0;
        while (i < sortedLeft.length && j < sortedRight.length) {
            if (sortedLeft[i] < sortedRight[j]) {
                sortedResult.push(sortedLeft[i]);
                i++;
            }
            else {
                sortedResult.push(sortedRight[j]);
                j++
                inv_count = inv_count + (sortedLeft.length - i);
            }
        }

        sortedResult = sortedResult.concat(sortedLeft.slice(i)).concat(sortedRight.slice(j));
        return [sortedResult, inv_count];
    }

    const mergeSort = (arrayOfIntegers) => {
        if (arrayOfIntegers.length <= 1) {
            return [arrayOfIntegers, 0];
        }
        let mid = Math.floor(arrayOfIntegers.length / 2);
        let left = arrayOfIntegers.slice(0, mid);
        let right = arrayOfIntegers.slice(mid);
        let [sortedLeft, invcountLeft] = mergeSort(left);
        let [sortedRight, invcountRight] = mergeSort(right);
        let result = merge(sortedLeft, sortedRight);

        return [result[0], result[1] + invcountLeft + invcountRight];
    }

    return mergeSort(arrayOfIntegers)[1];
};

console.log(inversionsCount2([2, 1]));  //1
console.log(inversionsCount2([2, 4, 1, 3, 5]));  //3
console.log(inversionsCount2([1, 20, 6, 4, 5]));  //5
console.log(inversionsCount2([]));  //0
console.log(inversionsCount2([1]));  //0
