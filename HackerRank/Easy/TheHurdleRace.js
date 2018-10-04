/*
https://www.hackerrank.com/challenges/the-hurdle-race/problem
*/

function hurdleRace(k, height) {
    let potions = Math.max(...height) - k;
    if (potions > 0) {
        return potions;
    } else {
        return 0;
    }
}