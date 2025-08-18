function revArr(A) {
  let left = 0;
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
  let A = [11, 25, 13, 18, 17, 19, 20, 25];
  A = revArr(A);
  console.log("Reverse array is ");
  console.log(A.join(" "));
}
main();
