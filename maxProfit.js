function maxProfit(A) {
  let buy = A[0],
    profit = 0;
  for (let i = 0; i < A.length; i++) {
    if (buy > A[i]) {
      buy = A[i];
    }
    if (A[i] - buy > profit) {
      profit = A[i] - buy;
    }
  }
  return profit;
}
function main() {
  let A = [2, 1, 3, 4, 5, 6, 74, 8, 10];
  console.log(maxProfit(A));
}
main();
