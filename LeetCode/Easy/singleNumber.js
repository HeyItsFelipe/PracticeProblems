/*
https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

// time complexity is quadratic, O(n^2)
const singleNumber = nums => {
  for(let i = 0; i < nums.length; i++) {
    let match = false;
    for(let j = 0; j < nums.length; j++) {
      if(i !== j && nums[i] === nums[j]) {
        match = true;
      }
    }
    if(!match) {
      return nums[i];
    }
  }
};

console.log("singleNumber: " + singleNumber([4,1,2,1,2]));

// time complexity is linear, but needs hash table for storage
const singleNumberHash = nums => {
  let ht = {};
  for(let i = 0; i < nums.length; i++) {
    if(ht[nums[i]]) {
      delete ht[nums[i]];
    } else {
      ht[nums[i]] = 1;
    }
  }
  return Number(Object.keys(ht)[0]);
};

console.log("singleNumberHash: " + singleNumberHash([4,1,2,1,2]));

// time complexity is linear, uses hash table, uses reduce
const singleNumberReduce = nums => {
  return Number(Object.keys(nums.reduce((acc, item) => {
    acc[item] ? delete acc[item] : acc[item] = 1;
    return acc;
  }, {}))[0]);
};

console.log("singleNumberReduce: " + singleNumberReduce([4,1,2,1,2]));

// best solution, it's linear and does not need extra storage
// relies on bitwise xor commutative property
const singleNumberXOR = nums => {
  let result = nums[0];
  for(let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

console.log("singleNumberXOR: " + singleNumberXOR([4,1,2,1,2]));