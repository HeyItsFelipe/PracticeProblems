/*
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
*/

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let brokenMaxCount = 0;
    let brokenMinCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
            brokenMaxCount++;
        }
        if (min > scores[i]) {
            min = scores[i];
            brokenMinCount++;
        }
    }
    return ([brokenMaxCount, brokenMinCount]);
}