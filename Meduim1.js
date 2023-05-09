function vowelChecker(x) {
  var firstChar = x.toLowerCase().charAt(0);
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("This is a vowel");
  } else {
    console.log("This is not vowel.");
  }
}
vowelChecker("H");
vowelChecker("i");
