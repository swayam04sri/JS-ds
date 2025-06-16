function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // eliminate other even numbers

    // check for factors up to the square root of num
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false