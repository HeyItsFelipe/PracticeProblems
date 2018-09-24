/*

https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/

const reverseWords = s => {
  return s
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};

const reverseWords2 = s => {
  return s
    .split(' ')
    .reduce((total, element) => {
      total +=
        element
          .split('')
          .reverse()
          .join('') + ' ';
      return total;
    }, '')
    .slice(0, -1);
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords2("Let's take LeetCode contest"));

/*
The first function goes through six successive linear methods.
Time complexity for the first function would be linear.
On the other hand, the second function has the linear method
of reduce which contains other linear methods inside, increasing
time complexity.  Therefore, the first function has a better time complexity than the second.
*/
