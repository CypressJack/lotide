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

const countOnly = function (allItems, itemsToCount) {
  let lettersToCount = [];
  let newObject = {};
  let counter = 0;
  for (const letter in itemsToCount) {
    if (itemsToCount[letter]) {
      lettersToCount.push(letter);
    }
  }
  for (const letter of allItems) {
    for (const count of lettersToCount) {
      if (letter === count && typeof newObject[letter] === 'undefined') {
        newObject[letter] = 1;
      } else if (letter === count && typeof newObject[letter] !== 'undefined') {
        newObject[letter]++;
      }
    }
  }
  return newObject;
}

const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "d",
  "e",
  "a",
  "b",
  "c",
  "d",
  "e",
];

const letterObject = {
  a: true,
  b: true,
  c: false,
  d: true,
  e: true,
}

console.log(countOnly(letterArray, letterObject));