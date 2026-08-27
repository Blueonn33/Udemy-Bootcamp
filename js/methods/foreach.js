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

// FOREACH - accepts a callback function. Calls the function once
// per element in the array
numbers.forEach(print)
numbers.forEach(function(el) {
    if (el % 2 === 0) 
        console.log(el);
});

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});

// MAP - creates a new array with the result of calling a callback
// on every element in the array
