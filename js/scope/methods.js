const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}

myMath.PI;           // 3.14159
myMath.square(2);    // 4
myMath["square"](2); // 4

// METHOD is a function that is passed to an object as a property

// SHORTHAND

const shortMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

