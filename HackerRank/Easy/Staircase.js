/*
https://www.hackerrank.com/challenges/staircase/problem
*/

function staircase(n) {
    for (let i = 0; i < n; i++) {
        console.log((" ".repeat(n - i - 1)) + ("#".repeat(i + 1)));
    }
}