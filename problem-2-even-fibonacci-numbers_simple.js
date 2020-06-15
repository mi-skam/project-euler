function fiboEvenSum(n) {
  let a = 1;
  let b = 2;
  let sum = b;

  while (b <= n) {
    let oldA = a;
    a = b;
    b = b + oldA;

    if (b % 2 === 0) sum += b;
  }

  return sum;

}

console.log(fiboEvenSum(60));
