function repeatmiss(A) {
  let count = [];
  for (let i = 0; i <= A.length; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    count[num]++;
  }
  let repeat, missing;
  for (let i = 1; i < count.length; i++) {
    if (count[i] == 2) repeat = i;
    if (count[i] == 0) missing = i;
  }
  return [repeat, missing];
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 8, 9, 10, 4];
  console.log(repeatmiss(A));
}
main();
