function trapWater(A) {
  let left = 0,
    right = A.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (A[left] < A[right]) {
      if (A[left] >= leftMax) {
        leftMax = A[left];
      } else {
        water += leftMax - A[left];
      }
      left++;
    } else {
      if (A[right] >= rightMax) {
        rightMax = A[right];
      } else {
        water += rightMax - A[right];
      }
      right--;
    }
  }
  return water;
}

function main() {
  let A = [1, 0, 2, 0, 3, 0, 1];
  console.log(trapWater(A)); 
}

main();
