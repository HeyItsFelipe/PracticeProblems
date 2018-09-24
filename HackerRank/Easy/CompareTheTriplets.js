/*
https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

function compareTriplets(a, b) {
    let result = [0, 0];
    a.forEach((element, index) => {
        if (element > b[index]) {
            result[0]++;
        }
        if (element < b[index]) {
            result[1]++;
        }
    });
    return result;
}