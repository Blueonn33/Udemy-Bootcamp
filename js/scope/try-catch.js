// TRY CATCH is used when you think a block of code will produce an error.
// Try catch does not stop the program execution, as would happen if it were missing

try {
    // try to execute this
    hello.toUpperCase();
} catch {
    // execution failed. Do this...
    console.log("Error");
}

console.log("After");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e); // 'e' is the error
        console.log("Please, pass a string");
    }
}