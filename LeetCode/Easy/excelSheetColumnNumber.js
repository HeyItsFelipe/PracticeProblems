/*

https://leetcode.com/problems/excel-sheet-column-number/description/

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:

Input: "A"
Output: 1

Example 2:

Input: "AB"
Output: 28

Example 3:

Input: "ZY"
Output: 701

*/

const titleToNumber = (s) => {
  let total = 0;
  let pow = 0;
  const lookup = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
  };
  var recurse = function(s, pow) {
    if(s.length === 1) {
      total += Math.pow(26, pow) * lookup[s];
      return total;
    }
    total += Math.pow(26, pow) * lookup[s.slice(-1)];
    recurse(s.slice(0, -1), ++pow);
  }
  recurse(s, pow);
  return total;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));