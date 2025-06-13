function countVowelsAndConsonants(str) {
    // Convert to lowercase to simplify comparison
    const lowerStr = str.toLowerCase();

    // Define vowel set
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of lowerStr) {
        if (char >= 'a' && char <= 'z') {
            if (vowels.has(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
        // Ignore non-alphabetic characters (e.g., spaces, punctuation)
    }

    console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}

// Example usage
countVowelsAndConsonants("hello world");