/*

https://leetcode.com/problems/to-lower-case/

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely"

*/

const toLowerCase = (str) => {
    return str.toLowerCase();
};

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('Lovely'));

/*
The native javascript method toLowerCase does all the work.
That method is of linear time complexity, therefore this function is linear.
*/