function twoSum(nums, target) {
    const map = new Map(); // number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]; // Found the pair
        }

        map.set(nums[i], i); // Store the number with its index
    }

    return []; // No solution found
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] because nums[0] + nums[1] == 9