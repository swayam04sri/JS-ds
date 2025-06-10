function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0,
        j = 0;

    // Merge while both arrays have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Append remaining elements (if any)
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// 🔍 Example
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 10];

console.log("Merged Array:", mergeSortedArrays(arr1, arr2));