// ARGUMENTS OBJECT - available inside every function
// It is an array-like object:
//      - Has a length property
//      - Does not have array methods like push/pop
// Constains all the arguments passed to the function
// Not available inside of arrow functions

function sum() {
    return arguments.reduce((total, el) => total + el); // X
}

sum(3,2,1,34,43,3,1);

// REST PARAMS - collects all remaining arguments into an 
// actual array

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

sum(3,4,5)

function raceResults(gold, silver, ...other) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`And the rest: ${other}`);
}

raceResults("Минчо Мустака", "Ненка Перуката", "Петьо Лъжицата", "Емилияна Джантата");

