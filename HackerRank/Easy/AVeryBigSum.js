/*
https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/

function aVeryBigSum(ar) {
    return ar.reduce((total, element) => {
        total = total + element;
        return total;
    }, 0);
}