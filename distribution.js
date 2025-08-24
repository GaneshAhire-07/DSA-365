function sort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length - 1 - i; j++) {
      if (A[j] > A[j + 1]) {
        let temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
}
function distribution(A, m) {
  sort(A);
  let result = A[m - 1] - A[0];
  for (let i = 1; m - 1 + i < A.length; i++) {
    let diff = A[m - 1 + i] - A[i];
    if (diff < result) result = diff;
  }
  return result;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6];
  let m = 3;
  console.log("Distribution " + distribution(A, m));
}
main();
