function productExceptSelf(nums) {
  let n = nums.length;
  let ans = new Array(n);

  // Step 1: Prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = prefix; // सध्या पर्यंतचं prefix store कर
    prefix *= nums[i]; // पुढच्या index साठी prefix update कर
  }

  // Step 2: Suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= suffix; // आधी prefix × suffix कर
    suffix *= nums[i]; // suffix update कर
  }

  return ans;
}

// Main function
function main() {
  let nums = [1, 2, 3, 4];
  console.log("Input:", nums);
  console.log("Output:", productExceptSelf(nums));

  let nums2 = [-1, 1, 0, -3, 3];
  console.log("Input:", nums2);
  console.log("Output:", productExceptSelf(nums2));
}

main();
