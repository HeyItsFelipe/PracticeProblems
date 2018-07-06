/*

https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1

Example 2:

Input: [0,2,1,0]
Output: 1

Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.

*/

const peakIndexInMountainArray = A => {
  return A.indexOf(Math.max(...A));
};

const peakIndexInMountainArray2 = A => {
  return A.reduce((peakIndex, element, index, array) => {
    if(element > array[peakIndex]) {
      return index;
    }
    return peakIndex;
  }, 0);
};

const peakIndexInMountainArray3 = A => {
  let peakIndex = 0;
  let peak = A[peakIndex];
  A.forEach((element, index, array) => {
    if(element > peak) {
      peak = element;
      peakIndex = index;
    }
  });
  return peakIndex;
};

console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray2([0,2,1,0]));
console.log(peakIndexInMountainArray3([0,2,1,0]));

/*
The time complexity is linear as it would compare each value to the current peak.
*/
