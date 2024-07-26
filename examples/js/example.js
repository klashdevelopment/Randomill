const {string, number, StringType} = require('../../randomill-ts/dist'); // can be replaced with 'randomill-ts' in your project

// Simple example: generates some random strings and numbers.

console.log("Random number: " + number());
console.log("Random number (min 10): " + number(10));
console.log("Random number (max 50): " + number(0, 50));
console.log("Random number (min 10 max 50): " + number(10, 50));

console.log("Gibberish: " + string(StringType.Gibberish));
console.log("First Name: " + string(StringType.FirstName));
