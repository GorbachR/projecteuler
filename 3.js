function largestPrimeFactor(number) {

  if(number <= 1) {
    return undefined;
  }

  let currentPrime = 2;

  while(number != 1) {
   if(number % currentPrime == 0) {
     number /= currentPrime;
   } else {
     currentPrime = nextPrime(currentPrime);
   }
  }

  return currentPrime;
}

function nextPrime(n) {
  if(n <= 1) {
    return 2;
  }

  n++;

  while(!isPrime(n)) {
    n++;
  }  
  
  return n;
}

function isPrime(n) {

  if(n <= 1) {
    return false;
  }

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(600851475143))
console.log(nextPrime(3))
