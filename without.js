// FUNCTION IMPLEMENTATION
const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let matching = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i] && matching === true) {
      matching = true;
    } else {
      matching = false;
    }
  }
  return matching;
};

const without = function(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    let doesMatch = false;
    for (let y = 0; y < array2.length; y++) {
      if (array1[i] === array2[y] && doesMatch === false) {
        doesMatch = true;
      }
    }
    if (!doesMatch) {
      newArray.push(array1[i])
    }
  }
  console.log(newArray);
}
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
console.log("First Case")
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log("Second Case")
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log("Third Case")
console.log(without(["1", "2", "3"], [1, "3", 2])); // => ["1", "2"]