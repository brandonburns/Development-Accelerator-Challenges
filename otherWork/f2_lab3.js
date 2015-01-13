/*********************************************************
LAB 2: Campy Sci-fi

Welcome to Lab 3 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab3.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: Body Swap. 20 points.
//*********************************************************
  // TODO: modify this constructor to create objects
  // with several properties, some of which model physical
  // attributes, and some of which model mental attributes.
  // Examples might include height (physical) and favorite
  // book (mental). It should take arguments so that each
  // object it creates can be unique.
function Person (tall, weight, gender, iq, favoriteColor) {
  this.tall = tall;
  this.weight = weight;
  this.gender = gender;
  this.iq = iq;
  this.favoriteColor = favoriteColor;
}

// the parameters a and b are Person objects
function bodySwap(a, b) {
  var i = a.iq;
  a.iq = b.iq;
  b.iq = i;

  var j = a.favoriteColor;
  a.favoriteColor = b.favoriteColor;
  b.favoriteColor = j;
  console.log(a, b);
}

var kirk = new Person("6-2", 180, "male", 130, "blue"); // TODO: give kirk some unique attributes
var drLester = new Person("5-11", 150, "male", 120, "red"); // TODO: give drLester some unique
//attributes

assert(kirk.iq = 130, "130");
assert(drLester.favoriteColor = "red", "red");

bodySwap(kirk, drLester);

assert(kirk.favoriteColor = "red", "red");
assert(drLester.iq = 130, "130");

//*********************************************************
// PROBLEM 2: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 Use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var minutes = 60;
var people = 0;
var totalTime = 0;
while (people < 1000) {
    totalTime += minutes;
    people += 1;
    minutes = 60 / (people + 1);
}
console.log(totalTime / 60);

var hoursSpentInDowington = 7.485470860550334; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze it's way through that town.

function hoursToOoze(population, peoplePerHour) {
  var minutes = 60;
  var people = 0;
  var totalTime = 0;
  while (people < population) {
      totalTime += minutes;
      people += 1;
      minutes = 60 / (people + peoplePerHour);
  }
  return totalTime / 60;
}
console.log(hoursToOoze(1000, 1));
console.log(hoursToOoze(2000, 50));
console.log(hoursToOoze(3000, 7));
console.log(hoursToOoze(10000, 5));

assert(hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(hoursToOoze(2000, 50) === 4.703361476436081, "2000, 5 === 4.703361476436081");
assert(hoursToOoze(3000, 7) === 6.992890417133645, "3000, 7 === 6.992890417133645");
assert(hoursToOoze(10000, 5) === 8.504672602741014, "5000, 25 === 8.504672602741014");

//*********************************************************
// PROBLEM 3: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, nativeLanguage) {
  this.homePlanet = homePlanet;
  this.nativeLanguage = nativeLanguage;

  // sb is a SentientBeing object
  this.sayHello = function(sb) {
    console.log(hello[this.nativeLanguage]);
    return hello[sb.nativeLanguage];
  };
}

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo\"noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me

// TODO: write five more assertions, to complete all the possible
// greetings between the three sentient beings you created above.

assert(romulan.sayHello(klingon) === "nuqneH", "the klingon should hear nuqneH");
assert(romulan.sayHello(human) === "hello", "the human should hear hello");

assert(human.sayHello(romulan) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert(human.sayHello(klingon) === "nuqneH", "the klingon should hear nuqneH");

assert(klingon.sayHello(romulan) === "Jolan\"tru", "the romulan should hear Jolan\"tru");
assert(klingon.sayHello(human) === "hello", "the human should hear hello");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
