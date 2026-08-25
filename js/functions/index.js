// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

let die1 = rollDie();
let die2 = rollDie();
let die3 = rollDie();
let die4 = rollDie();
let die5 = rollDie();
let die6 = rollDie();

function sing() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName) {
    console.log(`Hi, ${firstName}`);
}