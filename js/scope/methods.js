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

// THIS is used to access properties on the same object

const cat = {
    name: "Indigo",
    color: "gray",
    breed: "stray cat",
    meow() {
        console.log(`${this.name} says Meoww`);
    }
}

const meow2 = cat.meow;