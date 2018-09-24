/*
https://www.hackerrank.com/challenges/diagonal-difference/problem
*/

function diagonalDifference(arr) {
    let results = [0, 0];
    for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
        results[0] = results[0] + arr[i][i];
        results[1] = results[1] + arr[i][arr.length - 1 - i];
    }
    return Math.abs(results[0] - results[1]);
}