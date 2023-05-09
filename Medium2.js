// const str1 = "So dark the con of man";
// const str2 = "Madonna of the Rocks";

function checkAnagram(a, b) {
  let str1 = a.toLowerCase("").split("").sort().join("").replaceAll(" ", "");
  let str2 = b.toLowerCase("").split("").sort().join("").replaceAll(" ", "");
  if (str1 === str2) {
    console.log(`${a} is an anagram of ${b}`);
  } else {
    console.log(`${a} is not an anagram of ${b}`);
  }
}

console.log(checkAnagram("Things are good", "Dogs eat ants"));
console.log(checkAnagram("So dark the con of man", "Madonna of the rocks"));
