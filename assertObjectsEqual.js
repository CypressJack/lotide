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
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  for (const key in object1) {
    if (object1[key] === object2[key]) {
      result = true;
    } else if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
      result = eqArrays(object1[key], object2[key]);
    } else {
      result = false;
    }
  }
  return result;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = {
  a:1,
  b:2,
  c:3,
  d:4
}

const object2 = {
  a:1,
  b:2,
  c:3
}


assertObjectsEqual(object1, object2);