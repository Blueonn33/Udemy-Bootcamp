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

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function() {
    alert("Clicked");
})

function twist() {
    console.log("Twist");
}
function shout() {
    console.log("shout");
}

const tasButton = document.querySelector("#tas");
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// executes only once and removes the event listener
tasButton.addEventListener("click", twist, {once: true});
tasButton.addEventListener("click", shout);