function repeatmiss(A) {
  let count = [];
  for (let i = 0; i <= A.length; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    count[num]++;
  }
  let repeat, miss;
  for (let i = 1; i < count.length; i++) {
    if (count[i] == 0) {
      miss = i;
    }
    if (count[i] == 2) {
      repeat = i;
    }
  }
  return [repeat, miss];
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 11];
  console.log(repeatmiss(A));
}
main();
