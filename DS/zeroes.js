function moveZerosToEnd(arr) {
    let lastNonZeroIndex = 0;

    // Step 1: Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[lastNonZeroIndex++] = arr[i];
        }
    }

    // Step 2: Fill the rest of the array with zeros
    for (let i = lastNonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr));
// Output: [1, 3, 12, 0, 0]