/*
https://www.hackerrank.com/challenges/apple-and-orange/problem
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleLocations = [];
    apples.forEach(element => {
        appleLocations.push(element + a);
    });
    let orangeLocations = [];
    oranges.forEach(element => {
        orangeLocations.push(element + b);
    });
    let appleTotal = appleLocations.reduce((total, element) => {
        if (element >= s && element <= t) {
            total++;
        }
        return total;
    }, 0);
    let orangeTotal = orangeLocations.reduce((total, element) => {
        if (element >= s && element <= t) {
            total++;
        }
        return total;
    }, 0);
    console.log(appleTotal);
    console.log(orangeTotal);
}