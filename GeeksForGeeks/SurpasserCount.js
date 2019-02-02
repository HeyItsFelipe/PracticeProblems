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


/*
Naive Method.
This is a O(n^2) time complexity and a O(n) space complexity.
This would be of O(n^2) time complexity since there are nested for loops.
This would be O(n) space complexity because a storing array is created, which is about input array length.
*/

const surpasserCount2 = (arrayOfIntegers) => {
    let surpasserResults = [];

    let hm = {};
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        hm[arrayOfIntegers[i]] = 0;
    }

    const merge = (sortedLeft, sortedRight) => {
        let i = 0;
        let j = 0;
        let sortedArray = []
        while (i < sortedLeft.length && j < sortedRight.length) {
            if (sortedLeft[i] < sortedRight[j]) {
                sortedArray.push(sortedLeft[i]);
                //Because the element i of the left array is less
                //than the element j of the right array, we calculate the
                //amount of surpassers.
                //Because the value at i is less than the value of j, 
                //and because both arrays are sorted, then all elements from j 
                //to the end of its array are larger than the value of i.
                //The total count of the would be the amount of surpassers
                //for that element, adding it on to the appropriate in the hash map.
                hm[sortedLeft[i]] += sortedRight.length - j;
                i++;
            } else {
                sortedArray.push(sortedRight[j]);
                j++;
            }
        }
        sortedArray = sortedArray.concat(sortedLeft.slice(i)).concat(sortedRight.slice(j));
        return sortedArray;
    };

    const mergeSort = (arrayOfIntegers) => {

        if (arrayOfIntegers.length <= 1) {
            return arrayOfIntegers;
        }

        let mid = Math.floor(arrayOfIntegers.length / 2);
        let leftSide = arrayOfIntegers.slice(0, mid);
        let rightSide = arrayOfIntegers.slice(mid);
        let sortedLeft = mergeSort(leftSide);
        let sortedRight = mergeSort(rightSide);
        let sortedArray = merge(sortedLeft, sortedRight);
        return sortedArray;
    };

    mergeSort(arrayOfIntegers);

    for (let i = 0; i < arrayOfIntegers.length; i++) {
        surpasserResults.push(hm[arrayOfIntegers[i]]);
    }

    return surpasserResults;

};

/*
Modified Merge Sort with Hash Map.
This is a O(nlogn) time complexity and a O(n) space complexity.
This used the divide and conquer paradigm of merge sort.
The dividing of the array remains the same but the conquering aspect is different.
During the conquering process, which is the merge function, we not only sort
and merge the array, we are also calculating the surpasser count.  To
see how the inversions are calculated, see code.
The surpasser count is placed in a hash map with the input array element as a key.
The elements can be used as keys because the problem states that the input array 
is an array of distinct elements.
Once the merge sort is complete, we place the contents of the hash map in a
result array, using the input array as a reference to know the order to push the
surpasser count values.
*/

console.log(surpasserCount2([4, 5, 1, 2, 3])); //[1,0,2,1,0]
console.log(surpasserCount2([0])); //[0]
console.log(surpasserCount2([1, 3, 2])); //[2,0,0]
console.log(surpasserCount2([0, 5, 10])); //[2,1,0]
console.log(surpasserCount2([2, 7, 5, 3, 0, 8, 1])); //[4,1,1,1,2,0,0]
console.log(surpasserCount2([6, 7, 4, 5]));  //[1,0,1,0]
