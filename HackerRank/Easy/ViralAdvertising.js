/*
https://www.hackerrank.com/challenges/strange-advertising/problem
*/

function viralAdvertising(n) {
    let shared = 5;
    let liked;
    let likedSum = 0;
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2);
        likedSum += liked;
        shared = liked * 3;
    }
    return likedSum;
}