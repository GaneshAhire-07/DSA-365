function maxProfit(A) {
  let buy = A[0];
  let profit = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] < buy) buy = A[i];
    if (A[i] - buy > profit) profit = A[i] - buy;
  }
  return profit;
}
function main() {
  let A = [1, 2, 9, 3, 7, 10, 4, 11];
  console.log("Maximum profit is ");
  console.log(maxProfit(A));
}
main();
