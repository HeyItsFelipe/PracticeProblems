/*
https://www.hackerrank.com/challenges/kangaroo/problem
*/

function kangaroo(x1, v1, x2, v2) {
    if (x2 > x1 && v2 >= v1) {
        return 'NO';
    }
    let loc1 = x1;
    let loc2 = x2;
    while (loc1 < loc2) {
        loc1 += v1;
        loc2 += v2;
    }
    if (loc1 === loc2) {
        return 'YES';
    } else {
        return 'NO';
    }
}