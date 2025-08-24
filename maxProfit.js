function maxProfit(A) {
  let buy = A[0];
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (buy > A[i]) {
      buy = A[i];
    } else if (A[i] - buy > profit) {
      profit = A[i] - buy;
    }
  }
  return profit;
}
function main() {
  let A = [1, 2, 3, 4, 5, 10, 7, 8, 9];
  console.log("Max sellig is ");
  console.log(maxProfit(A));
}
main();
