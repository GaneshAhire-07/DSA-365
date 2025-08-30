function reverse(A) {
  let l = 0,
    r = A.length - 1;
  while (l < r) {
    let temp = A[l];
    A[l] = A[r];
    A[r] = temp;
    l++;
    r--;
  }
  return A;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Reverse array is ");
  console.log(reverse(A));
}
main();
