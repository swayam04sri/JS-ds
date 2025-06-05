let a = [2, 5, 1, 3, 2, 6, , 8, 8, ];

let b = a.sort((x, y) => x - y);
console.log(b);


for (i = 0; i < b.length - 1; i++) {
    if (b[i] === b[i + 1]) {
        console.log('Duplicate found:', b[i]);
    }
}