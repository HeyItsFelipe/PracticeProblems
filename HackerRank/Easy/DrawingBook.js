/*
https://www.hackerrank.com/challenges/drawing-book/problem
*/

function pageCount(n, p) {
    let turns = 0;
    if (p <= n / 2) {
        for (let i = 1; i < n; i++) {
            if (i % 2 === 0) {
                turns++;
            }
            if (i === p) {
                return turns;
            }
        }
    } else {
        for (let i = n; i > 0; i--) {
            if (i === p) {
                return turns;
            }
            if (i % 2 === 0) {
                turns++;
            }
        }
    }
}