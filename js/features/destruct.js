// DESTRUCTURING - short, clean syntax to unpack:
//  - Values from arrays
//  - Properties from objects 
// Into distinct variables

// array destructuring
const scores = [97, 89, 78, 65, 60, 45];
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
// gold   = 97
// silver = 89


// object destructuring
const user = {
    email: "raya12321@gmail.com",
    password: "RaYa10101",
    firstName: "Raya",
    lastName: "Petkova",
    born: 2006,
    profession: "Python developer",
    town: "Haskovo"
}

const user2 = {
    email: "marinov1777@gmail.com",
    password: "MaRRtin1717",
    firstName: "Martin",
    lastName: "Marinov",
    born: 2006,
    profession: ".NET developer"
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const { email, firstName, lastName } = user;

// set a new name for the variable
const { bord: birthYear } = user;

const {profession, town = "Sofia"} = user2;


// params destructuring
