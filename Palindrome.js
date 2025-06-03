function isPalindromeNumber(num) {
    const original = num.toString();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
}

// Example usage
const number = 121;
console.log(`${number} is ${isPalindromeNumber(number) ? "a palindrome" : "not a palindrome"} number.`);