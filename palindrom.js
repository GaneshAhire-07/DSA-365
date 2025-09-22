function palindrom(n) {
  let temp = n;
  b = 0;
  let c;
  while (temp > 0) {
    c = temp % 10;
    b = b * 10 + c;
    temp = Math.floor(temp / 10);
  }
  return n == b;
}
function main() {
  let n = 1214;
  console.log(palindrom(n));
}
main();
