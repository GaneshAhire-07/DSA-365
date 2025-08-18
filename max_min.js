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
  const A = [21, 45, 72, 1, 35, 96, 100, 5, 88];
  console.log("Largest element is " + max(A));
  console.log("Smallest element is " + min(A));
}
main();
