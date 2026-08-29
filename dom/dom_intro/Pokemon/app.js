// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for (let i = 1; i <= 1025; i++) {
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    const img = document.createElement("img");
    img.setAttribute("src", src);
    container.appendChild(img);
}