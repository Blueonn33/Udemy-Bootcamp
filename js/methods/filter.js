// FILTER - creates a new array with all elements that
// pass the test implemented by the provided function

const numbers = [1, 2, 3, 4, 45, 5, 56, 6, 5, 4, 2, 4, 56];

numbers.filter(n => {
    return n < 10;
})

// EVERY - tests whether ALL elements in the array pass the
// provided function. It returns a boolean value

// SOME - similar to every but returns TRUE if ANY of the
// array elements pass the test function

const exams = [84, 43, 54, 94, 41, 50, 65];

const passed = exams.every(score => score > 40); // true;

exams.some(score => score > 90);