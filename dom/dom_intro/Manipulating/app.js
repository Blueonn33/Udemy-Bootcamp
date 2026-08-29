const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const banner = document.getElementById('banner');
const toc = document.getElementById('toc');

const images = document.getElementsByTagName("img"); // HTML collection
const firstImage = images[0];
const length = images.length;  // 4

for (let img of images) {
    // console.log(img.src);
}

const squareImgs = document.getElementsByClassName("square");

for (let img of squareImgs) {
    // img.src = "";
}

// QUERY SELECTOR - a newer method to select a single element
const firstMatch = document.querySelector("p");
const bannerFirst = document.querySelector("#banner");
const squareFirst = document.querySelector(".square");

document.querySelector("img:nth-of-type(2)");

// querySelectorAll - returns a collection of matching elements

