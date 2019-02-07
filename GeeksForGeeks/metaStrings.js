/*
https://practice.geeksforgeeks.org/problems/meta-strings/0
*/

const metaStrings = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    let swapCount = 0;
    let hash = {};
    hash.length = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            swapCount++;
            if (!hash[string2[i] + string1[i]]) {
                hash[string1[i] + string2[i]] = 1;
                hash.length++;
            }
        }
        if (swapCount > 2) {
            return false;
        }
    }

    if (hash.length === 1 && swapCount === 2) {
        return true;
    } else {
        return false;
    }
};

/*
Using a Hash and a Swap Count.
The concept for this algorithm is that it should only return true if the strings are different at
only two indexes, represented by the swapCount, and if the only two letters are
off, represented by the hash.
If string lengths are different, it is an automatic false.
Both strings are iterated through, using the iterator i.
If the characters don't match, the swapCount variable is increased by one.
In addition to incrementing swapCount, we see if the inverse of the characters has been detected before.
If it hasn't, we put the current characters in the hash and increase the hash length.
If swapCount is more than two, it means that there is definitely more than two letters than need to
be swapped, show false is returned.
When the iteration is over, if the hash length is one and the swapCount is equal to two, then we return
true, else we return false.
*/

const metaStrings2 = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    let swapCount = 0;
    let prevIndex = -1;
    let currentIndex = -1;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            swapCount++;
            prevIndex = currentIndex;
            currentIndex = i;
        }
        if (swapCount > 2) {
            return false;
        }
    }

    return (string1[currentIndex] === string2[prevIndex] &&
        string2[currentIndex] === string1[prevIndex] &&
        swapCount === 2);
};

/*
Using Two Variables and a Swap Count.
The concept for this algorithm is that it should only return true if index of the last detected
character that was off in string1 matches the index of the first detected character that was
off in string2 and if the index of the index of the last detected character that was off in string2
matches the index of the index of the first detected character that was off in string1 and also
if characters are different at only two indexes, represented by swapCount.
If string lengths are different, it is an automatic false.
Both strings are iterated through, using the iterator i.
If the characters don't match, the swapCount variable is increased by one.
In addition to incrementing swapCount, we swap the value of prevIndex with currentIndex and set 
currentIndex to the value of the iterator.
If swapCount is more than two, it means that there is definitely more than two letters than need to
be swapped, show false is returned.
When the iteration is over, if the conditions match what was previously stated at the beginning and
the swapCount is equal to two, then we return true, else we return false.
*/

console.log(metaStrings2("geeks", "keegs"));  //true
console.log(metaStrings2("rsting", "string"));  //false
console.log(metaStrings2("sting", "string"));  //false
console.log(metaStrings2("", ""));  //false
console.log(metaStrings2("a", ""));  //false
console.log(metaStrings2("cbaa", "abca"));  //true
console.log(metaStrings2("geeks", "geeks"));  //false