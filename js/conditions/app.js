// console.log("Before conditional");
// let rand = Math.floor(Math.random() * 10) + 1;

// if (rand < 5) {
//     console.log("Your num is less than 5");
// } else {
//     console.log("Your num is greater than 5");
// }
// console.log(rand);

// console.log("After conditional");

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek == "monday") {
//     console.log("I love Mondays");
// } else if (dayOfWeek == "saturday") {
//     console.log("YaY");
// } else if (dayOfWeek == "friday") {
//     console.log("Yeahhh");
// } else {
//     console.log("MEH");
// }

// 0 - 5   - FREE
// 6 - 10  - $10
// 11 - 65 - $20
// 66+     - $10

// const age = 8;

// if (age <= 5) {
//     console.log("You are a baby. GET IN");
// } else if (age <= 10) {
//     console.log("You are a child");
// } else if (age <= 65) {
//     console.log("You are an adult");
// } else {
//     console.log("You are old. GET IN, baby");
// }

const password = prompt("Please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password, nice");
  } else {
    console.log("Remove the space, Knigga");
  }
} else {
  console.log("Password is too short!! 6+ chars, Knigga :)");
}
