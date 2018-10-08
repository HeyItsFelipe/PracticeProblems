/*
https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
    let socksObject = ar.reduce((total, element) => {
        if (!total[element]) {
            total[element] = 1;
        } else {
            total[element]++;
        }
        return total;
    }, {});
    let matchingPairs = 0;
    for (let key in socksObject) {
        if (socksObject[key] >= 2) {
            matchingPairs += Math.floor(socksObject[key] / 2);
        }
    }
    return matchingPairs;
}