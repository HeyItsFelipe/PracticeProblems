/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
*/

function jumpingOnClouds(c) {
    let totalJumps = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] !== 1) {
            i += 2;
        } else {
            i++;
        }
        totalJumps++;
    }
    return totalJumps;
}