/*
https://www.hackerrank.com/challenges/time-conversion/problem
*/

function timeConversion(s) {
    let amORpm = s.slice(-2);
    let hour = parseInt(s.slice(0, 2));
    let timeBody = s.slice(2, -2);
    if (amORpm === 'AM' && hour === 12) {
        return '00' + timeBody;
    }
    if (amORpm === 'AM' && hour < 10) {
        return '0' + String(hour) + timeBody;
    }
    if (amORpm === 'AM' && hour >= 9 && hour < 12) {
        return String(hour) + timeBody;
    }
    if (amORpm === 'PM' && hour === 12) {
        return String(hour) + timeBody;
    }
    return String(hour + 12) + timeBody;
}