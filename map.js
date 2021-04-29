const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else {
    return false
  }
}

assertEqual(eqArrays(map(words, word => word.length), [ '6', '7', '2', '5', '3' ]), true);
assertEqual(eqArrays(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]), true);
assertEqual(eqArrays(map(words, word => word.slice(2)), [ 'ound', 'ntsrol', '', 'jor', 'm' ]), true);
