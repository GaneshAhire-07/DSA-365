function maxProfit(A) {
  let profit = 0,
    buy = A[0];
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
  let A = [11, 2, 3, 4, 5, 6, 10, 7, 8, 9, 50];
  console.log(maxProfit(A));
}
main();
