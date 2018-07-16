/*

https://leetcode.com/problems/hamming-distance/description/

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

const hammingDistance = (x, y) => {
  return (x ^ y)
    .toString(2)
    .split('')
    .reduce((total, element) => {
      element === '1' ? ++total : total;
      return total;
    }, 0);
};

console.log(hammingDistance(1, 4));

/*
After using the XOR bitwise operator, we go into three
successive linear functions.
Removing the coefficient, the time complexity is linear, O(n).
*/
