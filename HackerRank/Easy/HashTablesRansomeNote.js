/*
https://www.hackerrank.com/challenges/ctci-ransom-note/problem
*/

function checkMagazine(magazine, note) {
    let hash = magazine.reduce((total, element) => {
        if (total[element]) {
            total[element]++;
        } else {
            total[element] = 1
        }
        return total;
    }, {});
    for (let i = 0; i < note.length; i++) {
        if (hash[note[i]]) {
            hash[note[i]]--;
        } else {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
}