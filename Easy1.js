//For even number
let numbers = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

//For odd numbers
let numbersO = [1, 2, 3, 4, 5, 6];
function filterOddNumbers(numbersO) {
  return numbersO.filter(function (number) {
    return number % 2 !== 0;
  });
}
let oddNumbers = filterOddNumbers(numbersO);
console.log(oddNumbers);
