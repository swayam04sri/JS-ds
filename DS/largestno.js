let a = [2, 5, 1, 8, 55, 9];
const c = a.sort((x, y) => x - y);
console.log(c);
console.log('This is the smallest one-- --', c[0]); // Output: 1
console.log('this is the largest one', c[c.length - 1]); // Output: 55