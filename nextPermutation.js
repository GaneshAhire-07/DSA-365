function nextPermution(A) {
  let ind1 = -1;
  let ind2 = -1;
  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] < A[i + 1]) {
      ind1 = i;
      break;
    }
  }
  if (ind1 == -1) {
    reverse(A, 0);
    return A;
  } else {
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] > A[ind1]) {
        ind2 = i;
        break;
      }
    }
    swap(A, ind1, ind2);
    reverse(A, ind1 + 1);
  }
  return A;
}
function reverse(A, start) {
  let i = start;
  let j = A.length - 1;
  while (i < j) {
    swap(A, i, j);
    i++;
    j--;
  }
}
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}
function main() {
  let A = [1, 2, 3];
  console.log(nextPermution(A));
}
main();
