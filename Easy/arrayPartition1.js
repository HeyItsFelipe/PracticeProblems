/*

https://leetcode.com/problems/array-partition-i/description/

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

*/

const arrayPairSum = nums => {
  let sum = 0;
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i = i + 2) {
    sum += Math.min(sorted[i], sorted[i + 1]);
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));

/*
According to a google search, the native javascript sort method is
of time complexity O(n * log(n)).  The loop iteration is n/2.
Noticing that the sort method is the most complex, we can say
the time complexity of this problem is O(n * log(n)).
*/
