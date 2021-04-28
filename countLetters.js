// FUNCTION IMPLEMENTATION
const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newObject = {};
  for (const letter of string) {
    if (typeof newObject[letter] === 'undefined') {
      newObject[letter] = 1;
    } else if (typeof newObject[letter] !== 'undefined') {
      newObject[letter]++;
  }
}
return newObject;
}
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

console.log(countLetters("lighthouse"));