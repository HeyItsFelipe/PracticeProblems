/*
https://leetcode.com/problems/fizz-buzz/description/

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

const fizzBuzz = (n) => {
  const result = [];
  for(let i = 1; i <= n; i++) {
    if(i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

console.log(fizzBuzz(15));

const fizzBuzzTernary = (n) => {
  const result = [];
  for(let i = 1; i <= n; i++) {
    i % 15 === 0 ? result.push("FizzBuzz") :
      i % 3 === 0 ? result.push("Fizz") :
        i % 5 === 0 ? result.push("Buzz") :
          result.push(i.toString());
  }
  return result;
};

console.log(fizzBuzzTernary(15));

/*
The time complexity would be linear, O(n).
*/