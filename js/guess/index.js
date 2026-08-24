let max = parseInt(prompt("Enter your maximum number"));

while (!max) {
    max = parseInt(prompt("Enter a valid number!"));
}

const target = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== target) {
    if (guess === 'q') break;

    if (guess > target) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
    attempts++;
}

if (guess === "q") {
    console.log("loser");
} else {
    console.log("Congrats :)")
    console.log(`Nice. It took you ${attempts} guesses`);
}