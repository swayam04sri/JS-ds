function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { even: evenCount, odd: oddCount };
}

// Example usage:
const numbers = [12, 7, 5, 64, 14, 3, 8, 9];
const result = countEvenOdd(numbers);

console.log(`Even numbers: ${result.even}`);
console.log(`Odd numbers: ${result.odd}`);