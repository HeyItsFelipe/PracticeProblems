/*
https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/

function birthday(s, d, m) {
    let totalWays = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            totalWays++;
        }
    }
    return totalWays;
}