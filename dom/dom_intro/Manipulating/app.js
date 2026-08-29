const h2 = document.querySelector("h2");
h2.setAttribute("class", "purple");
// the next class overrides the previous
h2.setAttribute("class", "border");

h2.classList.add("purple");
h2.classList.remove("border");
h2.classList.add("border");

h2.classList.contains("purple");
h2.classList.toggle("purple");  // if the class contains purple
// then it is removed and reverse works

const firstBold = document.querySelector("b");
firstBold.parentElement;

const squareImg = document.querySelector(".square");
squareImg.parentElement; // body
squareImg.children; // null

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F12%2Fretsu-unohana-making-another-serious-face.jpg&f=1&nofb=1&ipt=b6efc2a8830da7c0985da4c7bbd377971d10bf50890665ad8d3fe1780dc5e9fa");
newImg.classList.add("square");

document.body.appendChild(newImg);

const newH3 = document.createElement("h3");
newH3.innerText = 'Hello'
document.body.appendChild(newH3);

const p = document.querySelector("p");

p.append("Hellooo", " Ehoooooo");

const newB = document.createElement("b");
newB.append("HIIJIJIIJ ");
p.prepend(newB);

const newH2 = document.createElement("h2");
newH2.append("Nice chicks");

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", newH2);

// removeChild
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const b = document.querySelector("b");
b.parentElement.removeChild(b);

const firstImg = document.querySelector("img");
firstImg.remove();