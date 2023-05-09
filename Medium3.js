function divisibleNumber(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

var result = divisibleNumber(336, 360);
console.log(result);

var result = divisibleNumber(78, 126);
console.log(result);
