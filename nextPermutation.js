function nextPermutation(nums) {
  let ind1 = -1;
  let ind2 = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      ind1 = i;
      break;
    }
  }
  if (ind1 === -1) {
    reverse(nums, 0);
  } else {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[ind1]) {
        ind2 = i;
        break;
      }
    }
    swap(nums, ind1, ind2);
    reverse(nums, ind1 + 1);
  }
  return nums;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function reverse(arr, start) {
  let i = start;
  let j = arr.length - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
function main() {
  let nums = [1, 2, 3];
  console.log("Next Permutation is ");
  console.log(nextPermutation(nums));
}
main();
