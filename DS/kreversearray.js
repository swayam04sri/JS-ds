// Helper function to reverse part of an array in-place
function reverse(arr, start, end) {
    while (start < end) {
        // Swap elements at 'start' and 'end'
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Main function to rotate array to the left by k places
function leftRotateInPlace(arr, k) {
    let n = arr.length;
    k = k % n; // Normalize k (handles k > n)

    // Step 1: Reverse first k elements
    reverse(arr, 0, k - 1);

    // Step 2: Reverse the remaining n-k elements
    reverse(arr, k, n - 1);

    // Step 3: Reverse the whole array
    reverse(arr, 0, n - 1);

    return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotated = leftRotateInPlace(arr, k);
console.log(rotated); // Output: [3, 4, 5, 1, 2]