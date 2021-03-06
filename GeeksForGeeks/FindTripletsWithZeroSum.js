/*
https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1
*/

const findTriplets = (arrayOfIntegers) => {
    if (arrayOfIntegers.length < 3) {
        return false;
    }

    arrayOfIntegers.sort((a, b) => a - b);
    if (arrayOfIntegers[0] > 0 || arrayOfIntegers[arrayOfIntegers.length - 1] < 0) {
        return false;
    }

    for (let i = 0; i < arrayOfIntegers.length - 2; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length - 1; j++) {
            for (let k = j + 1; k < arrayOfIntegers.length; k++) {
                if (arrayOfIntegers[i] + arrayOfIntegers[j] + arrayOfIntegers[k] === 0) {
                    return true;
                }
            }
        }
    }
    return false;
};

/*
Naive Iteration Method.
This would be of O(n^3) time complexity and O(1) space complexity.
We have three loops nested one in another creating that O(n^3) time complexity.
The input is sorted and then the first element of the array is checked if it's larger than zero or
if the last element is less than zero.  
If either case occurs, then it means the sum of the three digits will always be greater than zero, or
always be less than zero so false is returned.
No additional storage is needed, as we are searching in place, so it will be an O(1) space complexity.
*/

const findTriplets2 = (arrayOfIntegers) => {
    const store = {};
    for (let i = 0; i < arrayOfIntegers.length - 1; i++) {
        for (let j = i + 1; j < arrayOfIntegers.length; j++) {
            if (store[-(arrayOfIntegers[i] + arrayOfIntegers[j])]) {
                return true;
            }
            else {
                store[arrayOfIntegers[j]] = 1;
            }
        }
    }
    return false;
};

/*
Hashing Method.
This would be of O(n^2) time complexity and O(n) space complexity.
We use two for loops, one nested in the other.  Making it an O(n^2) time complexity.
We use a store which may end up near the size of the array if no matches are found, making it an O(n) space complexity.
Here we use a hash table to store values we've previously seen in the array.
We compare the values we are currently seeing in the array to values, we've already seen, which is stored in the store.
When we check the store, we check if the negative value of the current sum exists in the store. An example being
if i and j are 2 and 7 respectively, then 2 + 7 = 9, and we look for -9 in the store to verify if
there is a zero sum of triplets.
If it does exist, we have a match, and true is returned.
*/

const findTriplets3 = (arrayOfIntegers) => {
    arrayOfIntegers.sort((a, b) => a - b);
    for (let i = 0; i < arrayOfIntegers.length - 2; i++) {
        let l = i + 1;
        let r = arrayOfIntegers.length - 1;
        while (l < r) {
            if (arrayOfIntegers[i] + arrayOfIntegers[l] + arrayOfIntegers[r] === 0) {
                return true;
            }
            else if (arrayOfIntegers[i] + arrayOfIntegers[l] + arrayOfIntegers[r] < 0) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    return false;
};

/*
Sort and Pointers.
This would be of O(n^2) time complexity and O(1) space complexity.
Two loops, one nested in another, makes it O(n^2) time complexity.
No additional store is needed as comparisons are done in place, making it an O(1) space complexity.
We do need to sort it, so we use JavaScript's native sort method.
We approximate sort to be O(nlogn).
This O(nlogn) is ignored due to the O(n^2) magnitude.
We start with i as being the first element, l at the second, and r at the last element.
When the sum of the three elements are zero, true is returned.
If the sum is less than zero, we move pointer l to the right, which will increase the sum in this
sorted array.
If the sum is greater than zero, we move pointer r to the left, which will decrease the sum in this
sorted array.
If the pointers meet, it means no zero sum was found, and the process is restarted but with pointer i 
moving one more position to the right.
If no sum is found after this process, false is returned.
*/

console.log(findTriplets3([0, -1, 1]));  //true
console.log(findTriplets3([]));  //false
console.log(findTriplets3([1, 2, 3]));  //false
console.log(findTriplets3([-1, -2, -3]));  //false
console.log(findTriplets3([0, 0, 0]));  //true
console.log(findTriplets3([0, -1, 2, -3, 1]));  //true
console.log(findTriplets3([-101, -102, -103, -1, 0, 1, 2, 3, 4, 5]));  //true
console.log(findTriplets3([63, -30, 4, 13, 85, -6, 11]));  //false
console.log(findTriplets3([44, -32, 78, 37, 2, 18, 64, -69, 78, 36, 25, 57, 84, -33, 31, -73, 40, 24, 51,
    13, 21, -53, 100, 18, 67, 8, 13, 45, 44, 31, 77, 21, 100, -52, 56, 5, 10, 21, 57, -2, 60, -32, 40, 15, 35, 42, 83,
    -25, 12, -39, 0, 46, 96, 2, 5, -52, 15, 2, 87, -4, 49, 54, 4, 39, 53]));  //true

