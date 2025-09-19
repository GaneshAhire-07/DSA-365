function maxArray(A) {
  let sum = 0,
    max = A[0];
  for (let i = 1; i < A.length; i++) {
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
  let A = [1, 2, 3, -4, -5, -6, 10, -20];
  console.log(maxArray(A));
}
main();
