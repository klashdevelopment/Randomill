const {string, number, StringType} = require('../../randomill-ts/dist'); // can be replaced with 'randomill-ts' in your project

// Simple example: generates a random string for every string type

// Converts the StringType enum into id-description pairs
function enumToDescriptedArray(enumeration, separatorRegex = /_/g) {
    return (Object.keys(enumeration))
        .filter(key => isNaN(Number(key)))
        .filter(key => typeof enumeration[key] === "number" || typeof enumeration[key] === "string")
        .map(key => ({
            id: enumeration[key],
            description: String(key).replace(separatorRegex, ' '),
        }));
}

// Generates a random string for every string type and prints it
console.time("Done with strings in ");
const stringTypes = enumToDescriptedArray(StringType);
for(let i = 0; i < stringTypes.length; i++) {
    const str = string(stringTypes[i].id);
    console.log(stringTypes[i].description + ": " + str);
}
console.timeEnd("Done with strings in ");

console.time("Done with numbers in ");
console.log("Random number: " + number());
console.log("Random number (min 10): " + number(10));
console.log("Random number (max 50): " + number(0, 50));
console.log("Random number (min 10 max 50): " + number(10, 50));
console.timeEnd("Done with numbers in ");