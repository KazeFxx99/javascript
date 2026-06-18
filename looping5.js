// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let i = 10;   
while (i <= 100) {
    console.log(i);
    i+=10;
}