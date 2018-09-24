/*

https://leetcode.com/problems/shortest-distance-to-a-character/description/

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

*/

const shortestToChar = (S, C) => {
  const cIndexes = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      cIndexes.push(i);
    }
  }

  const result = [];
  for (let i = 0; i < S.length; i++) {
    let shortest = S.length;
    for (let j = 0; j < cIndexes.length; j++) {
      if (Math.abs(i - cIndexes[j]) < shortest) {
        shortest = Math.abs(i - cIndexes[j]);
      }
    }
    result.push(shortest);
  }
  return result;
};

console.log(shortestToChar('loveleetcode', 'e'));

/*
We have the string S, which is of n elements.
We have cIndexes, an array of m elements, which is based on the S input.
We iterate through S which has cIndexes inside, also being iterated.
A worst case scenario, we have the length of S and cIndexes the same.
We can estimate that the time complexity of this function is quadratic, O(n^2).
*/
