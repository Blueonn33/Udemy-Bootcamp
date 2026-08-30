const h1 = document.querySelector("#heading");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("ruk")
    const red = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;

    h1.innerText = `rgb(${red}, ${blue}, ${green})`;
    document.body.style.backgroundColor = `rgb(${red},${blue},${green})`;
});

