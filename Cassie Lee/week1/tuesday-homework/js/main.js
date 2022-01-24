// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (num) {
    const square = num * num;
    console.log(`The result of squaring the number ${num} is ${square}`);
    return square;
}
squareNumber(3)


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
//It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num) {
    const half = num / 2;
    console.log(`Half of ${num} is ${half}`);
    return half;
}
halfNumber(5)


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents 
//of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(` ${num1} is ${percent} % of ${num2}`);
    return percent;
}
percentOf(2,4)


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return 
//the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius){
    const area = (3.12 * (radius * radius)).toFixed(2);
    console.log (`The area for a circle with radius ${radius} is ${area}`)
    return area;

}
areaOfCircle(2)


// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const birthDay = function (num) {
    const half = halfNumber (num);
    const square = squareNumber (half);
    const area = areaOfCircle (half);
    const percent = percentOf (square, area);
    return percent;
}
console.log(birthDay(3))


// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will 
// add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(amount){
    if (amount === 100000){
        return amount + " dollars (pinky)";
    }else{
        return amount + " dollars";
    }
        
    }

    

    // MixUp
    // Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings 
    // (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at 
    // least 2 characters long. For example:
    //   mixUp('mix', 'pod'): 'pox mid'
    //   mixUp('dog', 'dinner'): 'dig donner'
    // Look up the JavaScript string reference to find methods which may be useful!

    const mixUp = function(){

}



    // FixStart
    // Create a function called fixStart. It should take a single argument, a string, and return a version where all 
    // occurences of its first character have been replaced with '*', except for the first character itself. You can assume 
    // that the string is at least one character long. For example:
    // fixStart('babble'): 'ba**le'

    const fixStart = function(fix) {

    }


    // Verbing
    // Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
    // it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
    // If the string length is less than 3, it should leave it unchanged. For example:

    //   verbing('walk'): 'walking'
    //   verbing('swimming'): 'swimmingly'
    //   verbing('go'): 'go'


    // const verbing = function(word) {
    //     if (word.length === 3){
    //         return word + 'ing'}
    //     if (word.length)
    //     }
    // }

    // Not Bad
    // Create a function called notBad that takes a single argument, a string.
    // It should find the first appearance of the substring 'not' and 'bad'.
    // If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
    // If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
    // For example:
    //   notBad('This dinner is not that bad!'): 'This dinner is good!'
    //   notBad('This movie is not so bad!'): 'This movie is good!'
    //   notBad('This dinner is bad!'): 'This dinner is bad!'