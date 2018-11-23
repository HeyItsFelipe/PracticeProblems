/*

https://leetcode.com/problems/unique-email-addresses/

Every email consists of a local name and a domain name, separated by the @ sign.
For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent 
there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" 
and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. 
This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  
(Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

Example 1:
Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

Note:
1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.

*/

const numUniqueEmails = emails => {
    let uniqueEmails = new Set();
    for (let i = 0; i < emails.length; i++) {
        let parts = emails[i].split('@');
        let str = "";
        let dot = false;
        let plus = false;
        for (let j = 0; j < parts[0].length && !plus; j++) {
            if (parts[0][j] === '.') {
                dot = true;
            }
            if (parts[0][j] === '+') {
                plus = true;
            }
            if (!dot && !plus) {
                str += parts[0][j];
            }
            dot = false;
        }
        uniqueEmails.add(str + '@' + parts[1]);
    }
    return uniqueEmails.size;
};

let emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));

/*
To store unique values, a Set object is used.
The time complexity is difficult to determine as the email address is split and only the
section before '@' is analyzed.
In addition, the inner for loop terminates when a '+' is encountered.
A conservative estimate would be that this function has a quadratic time complexity
due to the nested for loops, but realistically it would be less.
*/