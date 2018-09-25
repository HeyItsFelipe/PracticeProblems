/*
https://www.hackerrank.com/challenges/grading/problem
*/

function gradingStudents(grades) {
    let result = [];
    grades.forEach(element => {
        if (element >= 38) {
            if ((element + 1) % 5 === 0) {
                result.push(element + 1);
            } else if ((element + 2) % 5 === 0) {
                result.push(element + 2);
            } else {
                result.push(element);
            }
        } else {
            result.push(element);
        }
    });
    return result;
}