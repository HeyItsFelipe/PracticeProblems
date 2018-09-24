/*

https://leetcode.com/problems/subdomain-visit-count/description/

A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

Example 1:
Input:
["9001 discuss.leetcode.com"]
Output:
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation:
We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

Example 2:
Input:
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output:
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation:
We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

Notes:

The length of cpdomains will not exceed 100.
The length of each domain name will not exceed 100.
Each address will have either 1 or 2 "." characters.
The input count in any count-paired domain will not exceed 10000.
The answer output can be returned in any order.

*/

const subdomainVisits = cpdomains => {
  const cache = {};
  cpdomains.forEach(element => {
    let countDomain = element.split(' ');
    let count = parseInt(countDomain[0]);
    let domain = countDomain[1];
    cache[domain] ? (cache[domain] += count) : (cache[domain] = count);
    let i = domain.indexOf('.');
    while (i != -1) {
      let slicedDomain = domain.slice(i + 1);
      cache[slicedDomain] ? (cache[slicedDomain] += count) : (cache[slicedDomain] = count);
      i = domain.indexOf('.', i + 1);
    }
  });

  let resultArray = [];
  for (let key in cache) {
    resultArray.push(cache[key] + ' ' + key);
  }
  return resultArray;
};

console.log(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org', '3 mail.com']));

/*
It will iterate through each element in an array.
It will split each element, separating the number from the domain.
In addition, we use two instances of indexOf.
We also have the while loop to consider.
Then we have to push the results in the object into an array.
Considering most of the time is spent iterating through each
element in the input array, n, and then inside that iteration, we
are iterating through each domain in the input array, assuming the
longest domain being of m length, we can estimate the time complexity
to be O(n * m).
*/
