function revArr(A) {
  let left = 0;
  let right = A.length - 1;
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
  let A = [12, 35, 75, 89, 100, 65, 48, 33];
  A = revArr(A);
  console.log("Reverse Array is ");
  console.log(A.join(" "));
}
main();
