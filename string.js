// Program to sort words in a sentence by their length

// Input sentence
const sentence = "JavaScript is a versatile powerful language";

// Split sentence into words, sort by length, then join back
const sortedByLength = sentence
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .join(' ');

// Output result
console.log("Original Sentence:", sentence);
console.log("Sorted by Word Length:", sortedByLength);