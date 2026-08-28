// DESTRUCTURING - short, clean syntax to unpack:
//  - Values from arrays
//  - Properties from objects 
// Into distinct variables

const scores = [97, 89, 78, 65, 60, 45];
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
// gold   = 97
// silver = 89

