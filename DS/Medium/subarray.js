function subarrayWithSum(arr, target) {
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        // Shrink window until sum <= target
        while (sum > target && start <= end) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return arr.slice(start, end + 1); // or return [start, end] for indices
        }
    }

    return null;
}



const arr = [1, 2, 3, 7, 5];
const target = 10;

console.log(subarrayWithSum(arr, target));
// Output: [3, 7, 2] or [7, 5] depending on the array