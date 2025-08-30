function search(A, k) {
  let l = 0,
    h = A.length - 1;
  while (l <= h) {
    let m = l + Math.floor((h - l) / 2);
    if (A[m] == k) return m;
    if (A[m] < k) l = m + 1;
    else h = m - 1;
  }
  return -1;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = 3;
  let result = search(A, k);
  if (result == -1) {
    console.log("Not found ");
  } else {
    console.log("Found at index " + result);
  }
}
main();
