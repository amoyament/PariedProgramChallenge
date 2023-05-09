function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);
