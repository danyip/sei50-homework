console.log('Back to the grind');

// # Allergies
//
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// - eggs (1)
// - peanuts (2)
// - shellfish (4)
// - strawberries (8)
// - tomatoes (16)
// - chocolate (32)
// - pollen (64)
// - cats (128)
//
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// - Whether Tom is allergic to any one of those allergens listed above.
// - All the allergens Tom is allergic to.
//
// ```
// scorecard:

// ```

const allergyTest = function(num){
  const scorecard = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  }

  const allergen = []

  const scores = Object.keys(scorecard).map(Number) // OPTIONAL: chain .map(Number) to convert the values to numbers

  // console.log(scores)

  if (num === 0){
    return `Great news! You're not allergic to anything!`
  } else {
    //loop through the scores and check if the num is greater than the score => subtract num from score
    for (let i = scores.length - 1; i >= 0; i--){
      // console.log(scores[i])
      let score = scores[i];
      if (num >= score){
        // console.log('num', num)
        // console.log('score', score)
        allergen.push(scorecard[score])
        num -= score
      }
    }
  }
  return `Here is the list of things you're allergic to: ${allergen.join(', ')}`
}

console.log(allergyTest(34))
console.log(allergyTest(17))
console.log(allergyTest(35))
console.log(allergyTest(120))
