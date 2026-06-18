const prompt = require("prompt-sync")({sigint: true});

let i = 1;
while (i <= 5000) {
    console.log(i);
    i+=2;
}
