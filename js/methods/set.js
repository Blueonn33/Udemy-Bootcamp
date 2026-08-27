// wait 3 seconds and display Hello; runs 1 time
// it is required to use a callback function
console.log("Hello...");
setTimeout(() => {
    console.log("...are you still there");
}, 3000)    // 3000 milliseconds == 3 seconds

console.log("hellooo");

// ORDER OF EXECUTION
// Hello...
// hellooo
// ...are you still there

// wait 2 seconds and execute the function continuously
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id); // stops the loop of execution by using
// the id of the interval