/*
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
*/

function divisibleSumPairs(n, k, ar) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0) {
                total++;
            }
        }
    }
    return total;
}