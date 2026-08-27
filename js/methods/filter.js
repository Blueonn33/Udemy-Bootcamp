// FILTER - creates a new array with all elements that
// pass the test implemented by the provided function

const numbers = [1, 2, 3, 4, 45, 5, 56, 6, 5, 4, 2, 4, 56];

numbers.filter(n => {
    return n < 10;
})

