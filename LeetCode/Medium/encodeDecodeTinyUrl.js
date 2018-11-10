/*

https://leetcode.com/problems/encode-and-decode-tinyurl/

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and 
it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. 
There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

*/


let codes = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
    let lowerCaseCodeValues = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseCodeValues = lowerCaseCodeValues.toUpperCase();
    let numberCodeValues = '1234567890';
    let allCodeValues = `${lowerCaseCodeValues}${upperCaseCodeValues}${numberCodeValues}`;
    let codeLength = 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        code += allCodeValues[Math.floor(Math.random() * Math.floor(allCodeValues.length))];
    }
    code = `http://tinyurl.com/${code}`;
    codes[code] = longUrl;
    return code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = shortUrl => {
    return codes[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

var tinyUrl = encode('https://leetcode.com/problems/design-tinyurl');
console.log(tinyUrl);
console.log(decode(tinyUrl));

/*
For encoding, create a key to use in hashtable.
The key will have original url as the value.
The key will also be our tinyurl.
To decode, we just use the tinyurl to get the value from the hashtable.
*/