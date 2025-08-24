function search(A, x) {
  let low = 0,
    high = A.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (A[mid] == x) return mid;
    if (A[mid] < x) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let x = 0;
  let result = search(A, x);
  if (result == -1) {
    console.log("Not found");
  } else {
    console.log("Found at index " + result);
  }
}
main();
