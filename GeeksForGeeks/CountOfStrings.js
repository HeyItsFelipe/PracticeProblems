/*
https://practice.geeksforgeeks.org/problems/count-of-strings-that-can-be-formed-using-a-b-and-c-under-given-constraints/0
*/

const countOfStrings = (n) => {
    if (n <= 0) {
        return 0;
    }
    let results = [];
    const recurse = (string = '', b = 1, c = 2) => {
        if (string.length >= n) {
            results.push(string);
            return;
        }
        recurse(string + 'a', b, c);
        if (b > 0) {
            recurse(string + 'b', b - 1, c);
        }
        if (c > 0) {
            recurse(string + 'c', b, c - 1);
        }
        return;
    };
    recurse();
    return results.length;
};

/*
Recursive Method with Closure.
Writing this out, you can have three trees.  Each tree has a different root.
The roots are 'a', 'b', or 'c'.
The first iteration of the recursion creates these three trees.
The nodes of the tree would only be created if the if statement criteria is met.
When a node is reached as indicated by our base case, it is pushed into the results array.
After recursion is complete, the lengths of the results are outputted, indicating how 
many different strings were formed.
This can also be done without closure by having the results array as a local variable, returning it
when the node is reached, and concatenating it with the parent's results variable.
*/

const countOfStrings2 = (n) => {
    let totalStrings = 0;
    let hm = {};
    const recurse = (n, string = '', b = 1, c = 2) => {
        if (hm[n + '' + b + '' + c]) {
            totalStrings += hm[n + '' + b + '' + c];
            return;
        }
        if (n === 0) {
            totalStrings++;
            return;
        }
        recurse(n - 1, string + 'a', b, c);
        if (b > 0) {
            recurse(n - 1, string + 'b', b - 1, c);
        }
        if (c > 0) {
            recurse(n - 1, string + 'c', b, c - 1);
        }
        return;
    }
    recurse(n);
    return totalStrings;
};

/*
Recursive Method with Dynamic Programming.
We have a hashmap to store the output of a completed node.
The trees need to be drawn out on paper to see that every node that
has the same certain inputs (n, b, c), will yield that same output, 
which is then added to totalStrings.
Storing the output as a value and the inputs (n,b,c), as a key allows
us to make a reference to it when the function comes across the same set of inputs.
When recursion is complete, we output the total number of completed strings.
*/

const countOfStrings3 = (n) => {
    //Only a's
    let condition1 = 1;

    //Only 1 b
    let condition2 = n;

    //Only 1 c
    let condition3 = n;

    //Only 1 b and 1 c
    let condition4 = n * (n - 1);

    //Only 2 c
    let condition5 = (n * (n - 1)) / 2;

    //Only 1 b and 2 c
    let condition6 = (n * (n - 1) * (n - 2)) / 2;

    let result = condition1 + condition2 + condition3 + condition4 + condition5 + condition6;
    return result;
};

/*
Permutation Method.
A knowledge of permutations and permutations with conditions is needed to understand
this alogorithm.
It was difficult for me to work with n, so instead I chose a large sample value for n to encompass
all the possible conditions, in this case 10.
If the size of the string we want is 10, and we only used a's, the permutation would be
10!/10!, which would be 1.  So condition one would be equal to one.
If we used one b, then the condition would evaluate to 10!/(1!9!), which would be 10.
So the second condtion would result the same value as the input, n.
If we used one c, then the condition would evaluate to 10!/(1!9!), which would be 10.
So the third condtion would result the same value as the input, n.
If one b and one c is used, the condition would evaluate to 10!/(1!1!8!), which would reduce
to 10 * 9.  So the fourth condition would result in n * (n - 1).
If two c's are used, the condition would evaluate to 10!/(2!8!), which would reduce to
(10 * 9)/2.  So the fifth condition would evaluate to (n * (n-1))/2.
If one b and two c's are used, the condition would evaluate to 10!/(1!2!7!), which would reduce
to (10 * 9 * 8)/2.  So the sixth condition would evalute to (n * (n - 1) * (n - 2))/2.
*/

console.log(countOfStrings3(0));
console.log(countOfStrings3(1));
console.log(countOfStrings3(2));
console.log(countOfStrings3(3));
console.log(countOfStrings3(4));