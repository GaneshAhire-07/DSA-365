function sort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
  }
  return A;
}
function Kthlarge(A, k) {
  sort(A);
  for (let i = 0; i < A.length; i++) {
    if (k == i + 1) return A[i];
  }
}
function main() {
  let A = [1, 2, 3, 4, 15, 32, 99, 5, 6, 7];
  let k = 5;
  console.log(Kthlarge(A, k));
}
main();
