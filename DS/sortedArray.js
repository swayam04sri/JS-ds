let a = [5, 6, 7, 13, 56];

let isSorted = true;
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    console.log("array is sorted");
} else {
    console.log("array is not sorted");
}