// FUNCTION IMPLEMENTATION
const assertEqual  = function(actual, expected) {
  if ((Array.isArray(actual)) && (Array.isArray(expected))) {
    if (actual.join() === expected.join()) {
      console.log(`✅ Assertion Passed:[${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅ Assertion Passed:[${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
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

const middle = function(array) {
  let newArray = [];
  let half = array.length / 2;
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 1 && array.length !== 1) {
    newArray.push(array[Math.floor(half)]);
    return newArray;
  } else if (array.length % 2 === 0 && array.length !== 2) {
    newArray.push(array[Math.floor(half) - 1]);
    newArray.push(array[Math.floor(half)]);
    return newArray;
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(middle([1]), []);
assertEqual(middle([1, 2]), []);
assertEqual(middle([1, 2, 3]), [2]);
assertEqual(middle([1, 2, 3, 4]), [2, 3]);
assertEqual(middle([1, 2, 3, 4, 5]), [3]);
assertEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);