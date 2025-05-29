function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return [...duplicates];
}
findDuplicates([1, 2, 3, 2, 4, 5, 1]); // Output: [2, 1]