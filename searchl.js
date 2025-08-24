function seachl(A, x) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] == x) return i;
  }
  return -1;
}
function main() {
  let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let x = 7;
  let result = seachl(A,x);
  if (result == -1) console.log("Not found");
  else console.log("Found " + result);
}
main();
