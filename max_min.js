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
  const A = [99, 45, 1, 23, 30, 100, 8, 67];
  console.log("Max element is: " + max(A));
  console.log("Min element is: " + min(A));
}
main();
