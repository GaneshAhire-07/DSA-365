function maxArray(A) {
  let maxi = A[0],
    sum = 0;
  for (let i = 1; i < A.length; i++) {
    sum += A[i];
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
  let A = [1, 2, -3, 4, -5, 6, -7, 8, 9, 10, -11];
  console.log(maxArray(A));
}
main();
