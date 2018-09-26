/*
https://www.hackerrank.com/challenges/minimum-swaps-2/problem
*/

function minimumSwaps(arr) {
    let swap = 0;

    // Create a copy of original array and sort it.
    let sorted = [...arr];
    sorted.sort((a, b) => {
        return a - b;
    });

    // This is similar to the bubble sort except we
    // keep track of how many swaps we make.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sorted[i]) {
            swap++;
            let swapped = false;
            // We find the element than needs to be swapped
            // to it's appropriate position in this for loop.
            for (let j = i + 1; j < arr.length && !swapped; j++) {
                if (arr[j] == sorted[i]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                    swapped = true;
                }
            }
        }
    }
    return swap;
}