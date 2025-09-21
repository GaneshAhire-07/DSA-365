function productExceptSelf(A) {
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    ans[i] = 1;
  }
  let preffix = 1;
  for (let i = 0; i < A.length; i++) {
    ans[i] = preffix;
    preffix = preffix * A[i];
  }
  let suffix = 1;
  for (let i = A.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * suffix;
    suffix = suffix * A[i];
  }
  return ans;
}
function main() {
  let A = [1, 2, 3, 4];
  console.log(productExceptSelf(A));
}
main();
