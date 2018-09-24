/*
https://www.hackerrank.com/challenges/simple-array-sum/problem
*/

function simpleArraySum(ar) {
    return ar.reduce((total, element) => {
        total = total + element;
        return total;
    }, 0);
}