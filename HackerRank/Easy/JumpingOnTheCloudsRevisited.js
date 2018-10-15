/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
*/

function jumpingOnClouds(c, k) {
    let e = 100;
    for (let i = 0; i < c.length; i += k) {
        if (c[i] === 0) {
            e = e - 1;
        } else {
            e = e - 3;
        }
    }
    return e;
}