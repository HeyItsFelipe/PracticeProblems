/*

https://leetcode.com/problems/valid-anagram/description/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

*/

const isAnagram = (s, t) => {

    let obj = {};
    let isAnagram = true;

    s.split('').forEach(x => {
        obj[x] ? ++obj[x] : obj[x] = 1;
    });

    t.split('').forEach(x => {
        obj[x] ? --obj[x] : obj[x] = 1;
    });

    for(let t in obj) {
        if (obj[t] >= 1) {
            isAnagram = false;
        }
    }
    return isAnagram;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

/*
We iterate through first string.
We iterate through the second string.
Then we iterate through object.
Time complexity is between O(m + n + o).
It is approximately linear.
*/