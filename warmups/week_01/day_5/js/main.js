// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
// How to structure it...
// - We want a custom function called isLeapYear

//Version  1 - longer but more readible

// const isLeapYear = function(year){
//   if (year % 400 === 0){
//     return true;
//   } else if (year % 100 === 0){
//     return false;
//   } else if (year % 4 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }


//Version 2 - MAGICAL - you're not expected to write code like this right now
const isLeapYear = function(year){
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 ===0))
}

console.log(isLeapYear(1997));//false
console.log(isLeapYear(1996));//true
console.log(isLeapYear(2000));//true
