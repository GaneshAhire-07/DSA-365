function duplicate(A) {
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) {
        return true;
      }
    }
  }
  return false;
}
function main() {
  let A = [1, 2, 3, 4, 5];
  console.log(duplicate(A));
}
main();
