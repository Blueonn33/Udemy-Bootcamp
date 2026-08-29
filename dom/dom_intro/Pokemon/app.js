// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 1025; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const src = `${baseURL}${i}.png`;

    const img = document.createElement("img");
    img.setAttribute("src", src);
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}