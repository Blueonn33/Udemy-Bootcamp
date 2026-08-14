console.log("Before conditional");
let rand = Math.floor(Math.random() * 10) + 1;

if (rand < 5) {
    console.log("Your num is less than 5");
    console.log(rand);
}
if (rand >= 5) {
    console.log("Your num is greater than 5");
    console.log(rand);
}

console.log("After conditional");