// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let i = 0;
while (i <= 70) {
    console.log(i);
    i+=2;
}