/*
https://www.hackerrank.com/challenges/mini-max-sum/problem
*/

function miniMaxSum(arr) {
    let results = [null, null];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        if (results[0] === null || sum < results[0]) {
            results[0] = sum;
        }
        if (results[1] === null || sum > results[1]) {
            results[1] = sum;
        }
    }
    console.log(results[0] + " " + results[1]);
}