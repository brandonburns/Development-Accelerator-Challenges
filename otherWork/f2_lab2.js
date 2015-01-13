/*********************************************************
LAB 3:

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: What's in a Name? 20 points.
//
// Each of the following three functions (x, y, and z) has
// an empty body. Look at the asserts for each function to
// figure out what function is supposed to do. Rename each
// function to reflect its purpose, implement them,
// then, add two more passing asserts for each one.
//*********************************************************
// COMMENT: fantastic work on this problem!

// COMMENT: it's the circumference of a circle, actually
// (with radius val)
function pieTimesTwo(val) {
// COMMENT: indent the inside of a function
return Math.PI * (2 * val);
}

assert(6.28 < pieTimesTwo(1) && pieTimesTwo(1) < 6.2832, "pieTimesTwo(1)");
assert(12.56 < pieTimesTwo(2) && pieTimesTwo(2) < 12.5664, "pieTimesTwo(2)");
assert(18.84 < pieTimesTwo(3) && pieTimesTwo(3) < 18.8496, "pieTimesTwo(3)");
assert(25.12 < pieTimesTwo(4) && pieTimesTwo(4) < 25.1328, "pieTimesTwo(4)");
assert(31.4 < pieTimesTwo(5) && pieTimesTwo(5) < 31.416, "pieTimesTwo(5)");

function min(x, y, z) {
return Math.min(x, y, z);
}

assert(min(1, 2, 3) === 1, "min(1, 2, 3)");
assert(min(4, 5, 3) === 3, "min(4, 5, 3)");
assert(min(-5, -10, 1) === -10, "min(-5, -10, 1)");
assert(min(-6, 4, 2) === -6, "min(-6, 4, 2)");
assert(min(1, 5, 8) === 1, "min(1, 5, 8");

// COMMENT: i would suggest "cube" rather than "cubed", to indicate
// what it will do to the val
function cubed(val) {
return val * val * val;
}

assert(cubed(1) === 1, "cubed(1)");
assert(cubed(3) === 27, "cubed(3)");
assert(cubed(5) === 125, "cubed(5)");
assert(cubed(6) === 216, "cubed(6)");
assert(cubed(7) === 343, "cubed(7)");

//*********************************************************
// PROBLEM 2: May cause side effects. 20 points.
//
// Identify all the side effects in the following functions.
// Use a comment (above the line with the side effect) to
// explain why it's a side effect and how it affects the
// outside scope.
//*********************************************************

// Take two arrays. Return true if they have all the same
// items. Ordering doesn't matter. Otherwise, return false.
function sameItems(array1, array2) {
  //array1.sort(); is a side effect because sorting the array will
  //permanently change the order of array.1 to how the function sorted
  //it outside the local context of the funciton. From this point out
  //the array will be in the order the sort put in in, even when
  //called outside the local context of the function.
  array1.sort();
  //array2.sort(); is a side effect because sorting the array will
  //permanently change the order of array.2 to how the function sorted
  //it outside the local context of the function. From this point out
  //the array will be in the order the sort put in in, even when
  //called outside the local context of the function.
  array2.sort();
  // DEDUCTION: -4 pop also causes a side effect (takes the last element
  // out of an array)
  while (array1.pop() === array2.pop()) {
    if (!array1.length) {
      return true;
    }
  }
  return false;
}

assert(sameItems([], []), "sameItems([],[])");
assert(sameItems([ 1, 2, 3 ], [ 2, 3, 1 ]), "sameItems([1,2,3],[2,3,1])");
assert(!sameItems([], [ 1 ]), "sameItems([],[1])");

// Take an array of string and a search string. Return an array
// that has only the strings in array that included the search
// string
function filter(array, searchString) {
  var startLength = array.length,
    currentString;
  for (var i = 0; i < startLength; i++) {
//The line below is a side effect, because ".pop" will permanetly
//remove a value from the array that is being passed through the
//function. Whenever the array that is passed through is called
//in the future, it will be missing its last value.
    currentString = array.pop();
    if (currentString.indexOf(searchString) !== -1) {
//The line below is a side effect, because ".unshift" permanently
//changes the array to add the current string to the beginning of
//the array. The array will permanently have extra values
//(whatever is in "currentString") in front of the original
//array because of the unshift.
      array.unshift(currentString);
    }
  }
  return array;
}

var catWords = [ "catnip", "kitty yawns", "kitten pile" ];
var kittenWords = [ "kitty yawns", "kitten pile" ];
assert(sameItems(kittenWords, filter(catWords, "kitt")), "filter");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
   // COMMENT: awesome use of apply! =)
   return Math.max.apply(null, array);
 }

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 5, 9, 8 ]) !== 5, "[5,9,8]");
assert(max([ 3, 7, 6 ]) > 6, "[3,7,6]");
assert(max([ 5, 7, 4 ]) < 8, "[5,7,4]");

function variablify(string) {
var varName = string.split(" ");
  // DEDUCTION: -4 you're assuming there are exactly three words in
  // the string. 
  varName[1] = varName[1].charAt(0).toUpperCase() + varName[1].substr(1);
  varName[2] = varName[2].charAt(0).toUpperCase() + varName[2].substr(1);
  varName = varName.join("");
  return varName;
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("homework on friday") === "homeworkOnFriday",
  "variablify(\"homework on friday\")");
assert(variablify("need to drink") === "needToDrink",
  "variablify(\"need to drink\")");
assert(variablify("time for bed") === "timeForBed",
  "variablify(\"time for bed\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
