function sort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
  }
  return A;
}
function distribution(A, m) {
  sort(A);
  let result = A[m - 1] - A[0];
  for (let i = 1; m - 1 + i < A.length; i++) {
    let diff = A[m - 1 + i] - A[i];
    if (diff < result) {
      result = diff;
    }
  }
  return result;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let m = 3;
  console.log(distribution(A, m));
}
main();
