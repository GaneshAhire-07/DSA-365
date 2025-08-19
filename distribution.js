function sort(A) {
  let n = A.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (A[j] > A[j + 1]) {
        let temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  return A;
}
function distribution(A, m) {
  let n = A.length;
  sort(A);
  result = A[m - 1] - A[0];
  for (let i = 1; m - 1 + i < n; i++) {
    let diff = A[m - 1 + i] - A[i];
    if (diff < result) {
      result = diff;
    }
  }
  return result;
}
function main() {
  let A = [7, 3, 2, 4, 9, 12, 56];
  let m = 5;
  console.log("Output " + distribution(A, m));
}
main();
