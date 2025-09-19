function reverse(A) {
  let left = 0,
    right = A.length - 1;
  while (left < right) {
    let temp = A[left];
    A[left] = A[right];
    A[right] = temp;
    left++;
    right--;
  }
  return A;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 40];
  console.log(reverse(A));
}
main();
