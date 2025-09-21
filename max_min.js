function max(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}
function min(A) {
  let min = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
  }
  return min;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Max " + max(A));
  console.log("Min " + min(A));
}
main();
