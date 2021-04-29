// FUNCTION IMPLEMENTATION
const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, key) {
    for (const keys in object) {
      if (key === object[keys]) {
        return keys;
      }
    }
};

const favouriteMovies = {
  sci_fi: "Star Wars",
  horror: "The Shining",
  comedy: "Knocked Up",
  documentary: "Planet Earth"
}

console.log(findKeyByValue(favouriteMovies, "Knocked Up"));