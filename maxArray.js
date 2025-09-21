function maxArray(A) {
  let sum = 0,
    max = A[0];
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
function main() {
  let A = [10, -2, 3, -5, 11, -8, 9];
  console.log(maxArray(A));
}
main();
