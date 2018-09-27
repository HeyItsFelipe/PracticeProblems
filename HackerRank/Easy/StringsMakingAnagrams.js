/*
https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
*/

function makeAnagram(a, b) {
    let hashA = a.split('').reduce((total, element) => {
        if (total[element]) {
            total[element]++;
        } else {
            total[element] = 1;
        }
        return total;
    }, {});
    let hashB = b.split('').reduce((total, element) => {
        if (total[element]) {
            total[element]++;
        } else {
            total[element] = 1;
        }
        return total;
    }, {});
    let resultHash = {};
    for (let key in hashA) {
        if (hashB[key]) {
            resultHash[key] = Math.abs(hashA[key] - hashB[key]);
        } else {
            resultHash[key] = hashA[key];
        }
    }
    for (let key in hashB) {
        if (resultHash[key] === undefined) {
            resultHash[key] = hashB[key];
        }
    }
    let sum = 0;
    for (let key in resultHash) {
        sum += resultHash[key];
    }
    return sum;
}