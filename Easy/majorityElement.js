/*

https://leetcode.com/problems/majority-element/description/

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

const majorityElement = nums => {
  const maxSetPoint = nums.length/2;
  let amounts = {};
  for(num of nums) {
    if(amounts[num]) {
        amounts[num]++;
    } else {
        amounts[num] = 1;
    }
    if(amounts[num] > maxSetPoint) {
        return num;
    }
  }
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

/*
Worst case scenario would be if all elements in the array are different.
This would then be linear O(n) time.
*/
