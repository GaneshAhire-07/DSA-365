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
function kthlarge(A, k) {
  sort(A);
  for (let i = 0; i < A.length; i++) {
    if (i + 1 == k) {
      return A[i];
    }
  }
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let k = 3;
  console.log(kthlarge(A, k));
}
main();
