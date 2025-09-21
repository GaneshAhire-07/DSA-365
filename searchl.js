function searchl(A, key) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] == key) {
      return i;
    }
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let key = 5;
  console.log(searchl(A, key));
}
main();
