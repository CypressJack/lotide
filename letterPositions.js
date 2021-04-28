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

const letterPositions = function(sentence) {
  const results = {};
  let index = -1;
  for (const letter of sentence) {
    index++;
    if (typeof results[letter] === 'undefined') {
      let newArray = [];
      newArray.push(index);
      results[letter] = newArray;
    } else if (typeof results[letter] !== 'undefined') {
      results[letter].push(index);
    }
  }
  delete results[" "];
  return results;
};

console.log(letterPositions("hello there bud"));

