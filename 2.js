function fiboEvenSum(n) {

  let fib1 = 1, fib2 = 2, swap, res = 0;

  while(fib2 <= n) {
    if(fib2 % 2 == 0) {
      res += fib2
    }
    swap = fib1 + fib2;
    fib1 = fib2;
    fib2 = swap;
  }

  return res;
}

console.log(fiboEvenSum(4000000))
