let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

const secret = "NiggaMigga1119";
let code = prompt("enter the secret code...");

while (code !== secret){
    code = prompt("enter the secret code...");
}

console.log("Congrats, you got the secret"); 