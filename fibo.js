function fibo(n) {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}

function main() {
  let n = 10; // तुम्ही हवे ते number देऊ शकता
  fibo(n); // फक्त call करणे, console.log वापरून पुन्हा print करण्याची गरज नाही
}

main();
