/*
https://www.hackerrank.com/challenges/find-digits/problem
*/

function findDigits(n) {
    let copyOfN = n;
    let numberOfDivisors = 0;
    while (copyOfN > 0) {
        let digit = copyOfN % 10;
        copyOfN = Math.floor(copyOfN / 10);
        if (n % digit === 0) {
            numberOfDivisors++;
        }
    }
    return numberOfDivisors;
}