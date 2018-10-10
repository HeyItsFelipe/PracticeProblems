/*
https://www.hackerrank.com/challenges/angry-professor/problem
*/

function angryProfessor(k, a) {
    if ((a.filter(element => element <= 0).length) >= k) {
        return 'NO';
    } else {
        return 'YES';
    }
}