function palindrome(a) {
  let b = 0;
  let c;
  let temp = a;
  while (temp > 0) {
    c = temp % 10;
    b = b * 10 + c;
    temp = Math.floor(temp / 10);
  }
  return b == a;
}
function main() {
  let a = 121;
  console.log(palindrome(a));
}
main();
