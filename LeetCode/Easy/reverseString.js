/*
https://leetcode.com/problems/reverse-string/description/

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

console.log(reverseString('This is a test string.'));

/*
String.split('') splits each character as an element of an array.
Array.reverse() reverses elements of an array.
Array.join('') joins all elements of an array.

Time Complexity:
I expect this to be O(3n).
Splitting the string would be linear O(n).
Reversing and joining would also be linear.
Therefore, time complexity would be O(3n).
This is linear O(n) as coefficient 3 would be dropped to calculate time complexity.
*/