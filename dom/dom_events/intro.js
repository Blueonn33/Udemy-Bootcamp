// EVENTS - responding to user inputs and actions
// onclick
const btn = document.querySelector("#v2");

btn.onclick = function() {
    console.log("You clicked me");
}

function scream() {
    console.log("Aaaa");
}

btn.onmouseenter = scream;

// addEventListener - specify the event type and a callback
// to run

