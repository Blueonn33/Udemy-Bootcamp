// FUNCTION SCOPE
let totalEggs = 0;

function collectEggs() {
    let totalEggs = 5;
    console.log(totalEggs);
}

console.log(totalEggs);
collectEggs();
console.log(totalEggs);

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird);
}

birdWatch();
console.log(bird);

// BLOCK SCOPE
let radius = 8;

if (radius > 0) {
    const PI = 3.14159;
    let msg = 'Hihi';
}

console.log(radius);
console.log(PI);        // error

for (let i = 0; i < 5; i++) {
    let msg = "Hi";
}
console.log(msg); // error

for (var i = 0; i < 5; i++) {
    var msg = "Hi";
}
// VAR is function scoped, not block scoped
// LET and CONST are function and block scoped
console.log(i);   // 5  
console.log(msg); // Hi

// LEXICAL SCOPE
function bankRobbery() {
    const heroes = ["Bananaman", "Black Cat", "Duckwoman"];

    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`Help uss, ${hero}`);
        }
    }

    cryForHelp();
}

bankRobbery();