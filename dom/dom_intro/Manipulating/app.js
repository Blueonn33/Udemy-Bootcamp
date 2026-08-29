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

