// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let i = 2010
while (i < 2025) {
    console.log(i)
    i++
}