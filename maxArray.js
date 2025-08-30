function maxArray(A) {
  let maxi = A[0],
    sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum > maxi) maxi = sum;
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
}
function main() {
  let A = [1, 2, -3, 4, 5, -6, 78, -9];
  console.log(maxArray(A));
}
main();
