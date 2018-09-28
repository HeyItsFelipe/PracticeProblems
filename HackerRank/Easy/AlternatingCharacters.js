/*
https://www.hackerrank.com/challenges/alternating-characters/problem
*/

function alternatingCharacters(s) {
    let lookingFor = '';
    if (s[0] == 'A') {
        lookingFor = 'B';
    } else {
        lookingFor = 'A';
    }
    let deleteTotal = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] != lookingFor) {
            deleteTotal++;
        } else if (s[i] === lookingFor && lookingFor === 'A') {
            lookingFor = 'B';
        } else {
            lookingFor = 'A';    
        }
    }
    return deleteTotal;
}