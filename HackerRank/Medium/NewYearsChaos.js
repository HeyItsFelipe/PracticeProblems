/*
https://www.hackerrank.com/challenges/new-year-chaos/problem
*/

function minimumBribes(q) {

    // Checks if any values have been more more than
    // two places up, starting from end of array.
    // If so, then array is Too Chaotic.
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - 1 > i + 2) {
            console.log("Too chaotic");
            return;
        }
    }

    // Counts the number of bribes.
    let bribes = 0;
    let swapped = true;
    // This is similar to a bubble sort, but instead we count
    // the number of bribes when a swap is made.
    while (swapped) {
        swapped = false;
        for (let i = 0; i < q.length - 1; i++) {
            if (q[i] > q[i + 1]) {
                let temp = q[i];
                q[i] = q[i + 1];
                q[i + 1] = temp;
                swapped = true;
                bribes++;
            }
        }
    }
    console.log(bribes);
}
