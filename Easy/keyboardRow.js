/*

https://leetcode.com/problems/keyboard-row/description/

Given a list of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

American keyboard Image

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

const findWords = words => {
    const keyboardIndexes = {
        q: 0,
        w: 0,
        e: 0,
        r: 0,
        t: 0,
        y: 0,
        u: 0,
        i: 0,
        o: 0,
        p: 0,
        a: 1,
        s: 1,
        d: 1,
        f: 1,
        g: 1,
        h: 1,
        j: 1,
        k: 1,
        l: 1,
        z: 2,
        x: 2,
        c: 2,
        v: 2,
        b: 2,
        n: 2,
        m: 2,
        Q: 0,
        W: 0,
        E: 0,
        R: 0,
        T: 0,
        Y: 0,
        U: 0,
        I: 0,
        O: 0,
        P: 0,
        A: 1,
        S: 1,
        D: 1,
        F: 1,
        G: 1,
        H: 1,
        J: 1,
        K: 1,
        L: 1,
        Z: 2,
        X: 2,
        C: 2,
        V: 2,
        B: 2,
        N: 2,
        M: 2
    };
    const result = [];
    words.forEach(word => {
        let letterKBIndex = keyboardIndexes[word[0]];
        let wordKBIndex = letterKBIndex;
        let i = 0;
        do {
            letterKBIndex = keyboardIndexes[word[i]];
            i++;
        } while (letterKBIndex === wordKBIndex && i < word.length);
        if (letterKBIndex === wordKBIndex) {
            result.push(word);
        }
    });
    return result;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));

/*
We are iterating through each word.
Then we are iterating through each letter of each word.
A major dependency of iterating through a word is the word length.
Another dependency is what letters are in the word.
Because of these considerations, and due to it being a nested
loop, we can guess the time complexity as being about quadratic, O(n^2).
*/
