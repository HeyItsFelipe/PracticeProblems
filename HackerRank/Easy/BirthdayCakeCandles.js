/*
https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

function birthdayCakeCandles(ar) {
    let largest = Math.max(...ar);
    return ar.reduce((total, element) => {
        if (element === largest) {
            total += 1;
        }
        return total;
    }, 0);
}