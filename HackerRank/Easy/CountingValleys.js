/*
https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
    let seaLevel = 0;
    return s.split('').reduce((total, element) => {
        if (seaLevel === 0 && element === 'D') {
            total++;
        }
        if (element === 'U') {
            seaLevel++;
        } else {
            seaLevel--;
        }
        return total;
    }, 0);
}