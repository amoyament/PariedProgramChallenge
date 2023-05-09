function matchingBrackets(x) {
  let i = -1;
  let bracket = [];
  for (let character of x) {
    if (character === "(" || character === "{" || character === "[") {
      bracket.push(character);
      i++;
    } else {
      if (
        i >= 0 &&
        ((bracket[i] === "(" && character === ")") ||
          (bracket[i] === "{" && character === "}") ||
          (bracket[i] === "[" && character === "]"))
      ) {
        // bracket.pop();
        // i--;
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    }
  }
  return i === -1;
}
let str = "{hello world}";
const bracketsOnly = str.replace(/[^\[\]\(\)\{\}]/g, "");

matchingBrackets(bracketsOnly);

let str1 = "{hello world]";
const bracketsOnly1 = str1.replace(/[^\[\]\(\)\{\}]/g, "");

matchingBrackets(bracketsOnly1);
