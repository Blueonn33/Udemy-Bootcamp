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

// REDUCE - executes a reducer function on each element of 
// the array, resulting in a single value

const prices = [9.99, 1.59, 2.44, 9.10, 5.34];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

const totalPrice = prices.reduce((total, price) => {
    return total + price;
});

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const evens = [2,4,6,8];
evens.reduce((sum, num) => {
    return (sum + num), 1;
})

[2,4,6,8].reduce((sum, num) => sum + num, 1);