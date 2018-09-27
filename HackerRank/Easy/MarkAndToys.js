/*
https://www.hackerrank.com/challenges/mark-and-toys/problem
*/

function maximumToys(prices, k) {
    prices.sort((a, b) => {
        return a - b;
    });
    let total = 0;
    let toys = 0;
    for (let i = 0; i < prices.length && total + prices[i] < k; i++) {
        total += prices[i];
        toys++;
    }
    return toys;
}