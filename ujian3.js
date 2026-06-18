const prompt = require("prompt-sync")({ sigint: true });

let teks = ''
for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++)
        teks += '*'
    teks += '\n'
}
console.log(teks)

teks2 = "";
for (let i = 4; i >= 1; i++){
    for (let j = 1; j <= i; j++) teks2 += "*";
    teks2 += "\n";
}
console.log(teks + teks2)




