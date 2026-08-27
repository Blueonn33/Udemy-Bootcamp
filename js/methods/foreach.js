const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 5, 3, 3, 5];
const movies = [
    {
        title: "Bleach TYBW",
        score: 94
    },
    {
        title: "Avatar",
        score: 90
    },
    {
        title: "John Wick",
        score: 87
    }
];

function print(el) {
    console.log(el);
}

numbers.forEach(print)
numbers.forEach(function(el) {
    if (el % 2 === 0) 
        console.log(el);
});

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

