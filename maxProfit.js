function maxProfit(A) {
  let buy = A[0],
    profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] < buy) {
      buy = A[i];
    }
    if (A[i] - buy > profit) {
      profit = A[i] - buy;
    }
  }
  return profit;
}
function main() {
  let A = [1, 2, 3, 4, 5, 6, 7, 10];
  console.log(maxProfit(A));
}
main();
