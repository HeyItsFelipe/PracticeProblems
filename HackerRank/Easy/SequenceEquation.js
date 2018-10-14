/*
https://www.hackerrank.com/challenges/permutation-equation/problem
*/

function permutationEquation(p) {
    let cache = {};
    let result = [];
    for (let i = 0; i < p.length; i++) {
        cache[p[i]] = i + 1;
    }
    for (let i = 1; i <= p.length; i++) {
        result.push(cache[cache[i]]);
    }
    return result;
}