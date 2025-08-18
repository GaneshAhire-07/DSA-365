function maxArray(nums) {
  let maxi = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > maxi) {
      maxi = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}
function main() {
  console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
main();
