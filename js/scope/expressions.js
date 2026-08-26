function add(x, y) {
  return x + y;
}

add(3, 4);

// FUNCTION EXPRESSION
const add = function (x, y) {
  return x + y;
};

add(4, 5);

// HIGHER ORDER FUNCTIONS
function callTwice(func) {
  func();
}

function callTenTime(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// RETURNING FUNCTIONS
function makeMysteryFunc() {
  const rand = Math.random();

  if (rand > 0.5) {
    return function () {
      console.log("Congrats");
    };
  } else {
    return function () {
      alert("You have been infected");
    };
  }
}

const mystery = makeMysteryFunc();
mystery();

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(1, 18);
isChild(40); // false
isChild(2);  // true

const isAdult = makeBetweenFunc(19, 64);

function isBetween(num) {
    return num >= 50 && num <= 100;
}
function isBetween2(num) {
    return num >= 1 && num <= 10;
}