/**
 * Function to find the minimum in a rotated sorted array
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // Minimum is in the right half
      left = mid + 1;
    } else {
      // Minimum is at mid or in the left half
      right = mid;
    }
  }

  return nums[left]; // smallest element
}

/**
 * Main function for testing
 */
function main() {
  let test1 = [3, 4, 5, 1, 2];
  let test2 = [4, 5, 6, 7, 0, 1, 2];
  let test3 = [11, 13, 15, 17];

  console.log("Input:", test1, " -> Min:", findMin(test1)); // 1
  console.log("Input:", test2, " -> Min:", findMin(test2)); // 0
  console.log("Input:", test3, " -> Min:", findMin(test3)); // 11
}

// Run main
main();
