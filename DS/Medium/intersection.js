function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
}

const nums1 = [1, 2, 2, 3, 1];
const nums2 = [2, 2, 3];

console.log(intersection(nums1, nums2)); // Output: [2]