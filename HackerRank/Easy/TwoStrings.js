/*
https://www.hackerrank.com/challenges/two-strings/problem
*/

function twoStrings(s1, s2) {
    let hash = s1.split('').reduce((total, element) => {
        total[element] = true;
        return total;
    }, {});
    for (let i = 0; i < s2.length; i++) {
        if (hash[s2[i]]) {
            return "YES";
        }
    }
    return "NO";
}