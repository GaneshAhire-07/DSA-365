function trapWater(A) {
  let left = 0,
    right = A.length - 1;
  let leftMax = A[left];
  let rightMax = A[right];
  let water = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      if (A[left] > leftMax) {
        leftMax = A[left];
      }
      water += leftMax - A[left];
    } else {
      right--;
      if (A[right] > rightMax) {
        rightMax = A[right];
      }
      water += rightMax - A[right];
    }
  }
  return water;
}
function main() {
  let A = [1, 0, 2, 0, 3, 0, 1];
  console.log(trapWater(A));
}
main();
