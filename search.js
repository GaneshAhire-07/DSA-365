function search(A, key) {
  let low = 0,
    high = A.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (A[mid] == key) return mid;
    if (A[mid] < key) low = mid + 1;
    else {
      high = mid - 1;
    }
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  let key = 3;
  console.log(search(A, key));
}
main();
