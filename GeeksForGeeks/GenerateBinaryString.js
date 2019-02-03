/*
https://practice.geeksforgeeks.org/problems/generate-binary-string/0
*/

const generateBinaryStrings = (string) => {
    const recurse = (string, index = 0) => {
        let result = [];
        if (index >= string.length) {
            result.push(string);
            return result;
        }
        if (string[index] === '?') {
            let sliced1 = string.slice(0, index);
            let sliced2 = string.slice(index + 1);
            index = index + 1;
            result = result.concat(recurse(sliced1 + '0' + sliced2, index));
            result = result.concat(recurse(sliced1 + '1' + sliced2, index));
        } else {
            index = index + 1;
            result = result.concat(recurse(string, index));
        }
        return result;
    };
    return recurse(string);
};

/*
Recursion Method with Concatenation.
If written down, each question mark will either be a 1 or 0.
This is similar to creating a decision tree and outputting all valid decisions.
Decision trees can be approached using recursion.
Our base case is if the index, which we use as an iterator, is greater than or
equal to the string, we push the string in the result array.
We use the base case to verify that we have a valid solution.
For our recursive cases, if a question mark is found at the iterator, we replace
it with a 1 or 0 and recurse the newly formed string, else we recurse the same string
we received.
In this example, the result array is a local variable, which is returned during the
base case and then concatenated with the parent function's result array.
*/

const generateBinaryStrings2 = (string) => {
    let result = [];
    const recurse = (string, index = 0) => {
        if (index >= string.length) {
            result.push(string);
            return;
        }
        if (string[index] === '?') {
            let sliced1 = string.slice(0, index);
            let sliced2 = string.slice(index + 1);
            index = index + 1;
            recurse(sliced1 + '0' + sliced2, index);
            recurse(sliced1 + '1' + sliced2, index);
        } else {
            index = index + 1;
            recurse(string, index);
        }
        return;
    };
    recurse(string);
    return result;
};

/*
Recursion Method with Closure.
If written down, each question mark will either be a 1 or 0.
This is similar to creating a decision tree and outputting all valid decisions.
Decision trees can be approached using recursion.
Our base case is if the index, which we use as an iterator, is greater than or
equal to the string, we push the string in the result array.
We use the base case to verify that we have a valid solution.
For our recursive cases, if a question mark is found at the iterator, we replace
it with a 1 or 0 and recurse the newly formed string, else we recurse the same string
we received.
In this example the result array is an environment variable for each recurse that is
called making each called recurse a closure.
*/

const generateBinaryStrings3 = (string) => {
    let queue = [];
    queue[0] = string;
    let i = 0;
    while (i < string.length) {
        let found = false;
        while (!found && i < string.length) {
            if (queue[0][i] === '?') {
                queue.push(queue[0].slice(0, i) + '0' + queue[0].slice(i + 1));
                queue.push(queue[0].slice(0, i) + '1' + queue[0].slice(i + 1));
                queue.shift();
                found = true;
            } else {
                i++;
            }
        }
    }
    return queue;
};

/*
Queue Method.
This requires pushing our first string into a queue and analyzing it.
The first element of the queue is analyzed with an iterator i for the question mark, 
and its possible outcomes are pushed into the queue.
That element is then shifted out of the queue.
The iterator i is only increased if the character in the string is not a
question mark just in case that the next queue[0] element has a question mark in
the same position as the previous q[0].
When the iterator i is greater than the string length, it means we
found all the possible outcomes and pushed them into the queue.
*/

console.log(generateBinaryStrings3('1??0?101'));
console.log(generateBinaryStrings3('??'));
console.log(generateBinaryStrings3('?'));
console.log(generateBinaryStrings3('1??'));
console.log(generateBinaryStrings3('??0'));
