function largestPalindromeProduct(n) {

  let f1, f2, largestPalindrome = 0;
  f1 = 10**(n)-1;

  while(f1 != 0) {
    f2 = f1;
    while(f2 != 0) {
      let product = f1 * f2
      if(isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = f1 * f2;
      }
      f2--;
    }
    f1--;
  }
  return largestPalindrome;
}

function isPalindrome(n) {
  let original = n, reverse = 0;

  while(n != 0) {
    reverse *= 10;
    reverse += n % 10;
    n = (n / 10) | 0;
  }

  return original == reverse ? true : false;
}

console.log(largestPalindromeProduct(3))
