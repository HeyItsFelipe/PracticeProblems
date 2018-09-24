/*
https://www.hackerrank.com/challenges/plus-minus/problem
*/

function plusMinus(arr) {
    let results = [0, 0, 0];
    arr.forEach((element) => {
        if (element > 0) {
            results[0]++;
        } else if (element < 0) {
            results[1]++;
        } else {
            results[2]++;
        }
    });
    console.log(results[0] / arr.length);
    console.log(results[1] / arr.length);
    console.log(results[2] / arr.length);
}