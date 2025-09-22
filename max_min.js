function max_min(A) {
  let max = A[0],
    min = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
    if (A[i] > max) {
      max = A[i];
    }
  }
  return [max, min];
}

function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(max_min(A));
}
main();
