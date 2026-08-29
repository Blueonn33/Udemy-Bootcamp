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
    console.log(img.src);
}