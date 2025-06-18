function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n); // Return only the first n terms
}

console.log(generateFibonacci(20)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]