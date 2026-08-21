const person = {
    firstName: "Martin",
    lastName: "Marinov"
};

const kitchenSink = {
    favNum: 17,
    isNigga: false,
    colors: ["indigo", "lavender"]
};

let lastName = person["lastName"];
let colors = kitchenSink["colors"];
// OR
colors = kitchenSink.colors;

const years = {
    2004: "Good",
    2020: "Bad"
};

let goodYear = years["2004"];

const midterms = {
    Martin: 90,
    Raya: 93,
}

midterms.Martin = 91;

const comments = [
    {
        username: "Tammy",
        text: "Lol",
        votes: 9
    },
    {
        username: "Knigga",
        text: "What is the difference between E and EA",
        votes: -40632
    }
];

const kniggaVotes = comments[1].votes;
