function searchl(A, K) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] == K) return i;
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let K = 3;
  let result = searchl(A, K);
  if (result == -1) console.log("Not found ");
  else console.log("Found at index " + result);
}
main();
