var maxProduct = function (nums) {
  // Manual max function
  function myMax(a, b, c) {
    let m = a;
    if (b > m) m = b;
    if (c > m) m = c;
    return m;
  }

  // Manual min function
  function myMin(a, b, c) {
    let m = a;
    if (b < m) m = b;
    if (c < m) m = c;
    return m;
  }

  // Initialize res as the first element manually
  let res = nums[0];
  let curMax = 1,
    curMin = 1;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    let temp = curMax * n;
    curMax = myMax(temp, curMin * n, n);
    curMin = myMin(temp, curMin * n, n);

    if (curMax > res) {
      res = curMax;
    }
  }

  return res;
};

// Example usage
function main() {
  let nums1 = [2, 3, -2, 4];
  console.log(maxProduct(nums1)); // 6

  let nums2 = [-2, 0, -1];
  console.log(maxProduct(nums2)); // 0

  let nums3 = [-2, 3, -4];
  console.log(maxProduct(nums3)); // 24
}

main();
