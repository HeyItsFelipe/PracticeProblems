// Creating the memoize function.
const memoize = fn => {
    let cache = {};
    return (...args) => {
        let n = args[0]
        if (n in cache) {
            console.log(`Fetching result for ${n} from cache!`);
            return cache[n];
        }
        console.log(`Caching result for ${n}!`);
        cache[n] = fn(n);
        return cache[n];
    }
};

// Using memoize on a typical function.
const times10 = n => n * 10;
let memoizedTimes10 = memoize(times10);

// Logging result for using memoize on a typical function.
console.log(memoizedTimes10(4));
console.log(memoizedTimes10(5));
console.log(memoizedTimes10(4));
console.log(memoize(times10)(4));

// Using memoize on a recursive function.
const factorial = memoize(
    n => {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    });

// Logging result for using memoize on a recursive function.
console.log(factorial(3));
console.log(factorial(5));