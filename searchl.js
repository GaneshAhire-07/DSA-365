function searchl(A, key) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] == key) {
      return i;
    }
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 89, 401];
  let key = 2;
  console.log(searchl(A, key));
}
main();
