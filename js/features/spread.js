// SPREAD - allows an iterable such as an array to be expanded
// in places where zero or more arguments (for function calls)
// or elements (for array literals) are expected, or an object
// expression to be expanded in places where zero or more 
// key-value pairs (for object literals) are expected

// SPREAD FOR FUNCTION CALLS - expands an iterable (array, string, etc.)
// into a list of arguments

Math.max(1,23,4,4,32,3,4,5);
Math.min(32,4,4,3,112,4,1);

const nums = [1,32,24,43,32,12,12,4];

Math.max(nums);     // NaN
Math.max(...nums);  // 43

console.log("asda", "dasdasd", "fa");
console.log(...nums);

// SPREAD IN ARRAY LITERALS - create a new array using an
// existing array. Spreads the elements from one array into
// a new array

const cats = ["Garvan", "Indigo", "Porcelain"];
const dogs = ["Sapphire", "Onyx"];

const allPets = [...cats, ...dogs, "Labirynth"];


// SPREAD IN OBJECT LITERALS - copies properties from one object
// into another object literal

const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    isFurry: true,
    family: "Caninae"
};

const catDog = {...feline, ...canine};
// legs: 4,
// isFurry: true,
// family: "Caninae"    -> conflict with the Felidae. Last
// one wins

const arr = {...[2,3,4,2]};
// 0: 2,
// 1: 3,
// ...  indeces are the keys and the values are the values

const dataFromForm = {
    email: "nihha@gmail.com",
    password: "hinna11",
    username: "FunkoKA"
}

const newUser = {...dataFromForm, id: 12, isAdmin: false}