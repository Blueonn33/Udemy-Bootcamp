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
