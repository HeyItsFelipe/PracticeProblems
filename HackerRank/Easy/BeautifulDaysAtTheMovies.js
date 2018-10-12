/*
https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
*/

function beautifulDays(i, j, k) {
    let totalBeautifulDays = 0;
    for (let value = i; value <= j; value++) {
        let reverseValue = parseInt(value.toString().split('').reverse().join(''));
        if (Math.abs(value - reverseValue) % k === 0) {
            totalBeautifulDays++;
        }
    }
    return totalBeautifulDays;
}