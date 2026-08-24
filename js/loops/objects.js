const testScores = {
    keenan: 90,
    deamon: 50,
    monny: 45,
    simon: 49,
    garmaddon: 98
};

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores)

for (let score of scores) {
    total += score;
}

console.log("Average " + total / scores.length);