/*
https://www.hackerrank.com/challenges/bon-appetit/problem
*/

function bonAppetit(bill, k, b) {
    let actualCharge = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            actualCharge += bill[i];
        }
    }
    if (actualCharge * 0.5 === b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - (actualCharge * 0.5));
    }
}