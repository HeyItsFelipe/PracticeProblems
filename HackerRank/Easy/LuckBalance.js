/*
https://www.hackerrank.com/challenges/luck-balance/problem
*/

function luckBalance(k, contests) {
    contests.sort((a, b) => {
        return b[0] - a[0];
    });
    let totalLuck = 0;
    let importanceBalance = k;
    for (var i = 0; i < contests.length; i++) {
        if (importanceBalance <= 0 && contests[i][1] === 1) {
            totalLuck -= contests[i][0];
        } else {
            totalLuck += contests[i][0];
        }
        if (contests[i][1] === 1) {
            importanceBalance--;
        }
    }
    return totalLuck;
}