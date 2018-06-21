/*

https://leetcode.com/problems/move-zeroes/description/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

const moveZeroes = (nums) => {
  let totalIterations = nums.length;
  for(let i = 0; i < totalIterations; i++) {
    if(nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      --i;
      --totalIterations;
    }
  }
  return nums;
};

console.log(moveZeroes([0,1,0,3,12]));

/*
The for loop is a linear time complexity.
The splice is also linear.
If input has no zeroes, it is a linear time complexity.
If input has all zeroes, it gets a bit close to quadratic.
*/