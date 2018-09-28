/*
https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
*/

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => {
        return a - b;
    });
    let absDiff = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) < absDiff) {
            absDiff = Math.abs(arr[i] - arr[i + 1]);
        }
    }
    return absDiff;
}