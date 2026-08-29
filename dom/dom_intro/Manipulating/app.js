const h1 = document.querySelector('h1');
h1.style.color = "blue"

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.style.color = "red";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

// GETTING THE VALUES OF AN ELEMENT
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).fontSize;
window.getComputedStyle(h1).fontFamily;