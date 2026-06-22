const prompt = require('prompt-sync')({ sigint: true });
let diagonal1 = Number(prompt("Masukan Diagonal 1:"));
let diagonal2 = Number(prompt("Masukan Diagonal 2:"));
let sisi1 = Number(prompt("Masukan Sisi 1:"));
let sisi2 = Number(prompt("Masukan Sisi 2:"));
let sisi3 = Number(prompt("Masukan Sisi 3:"));
let sisi4 = Number(prompt("Masukan Sisi 4:"));

let luas = 0.5 * diagonal1 * diagonal2;
let keliling = sisi1 + sisi2 + sisi3 + sisi4;

console.log("Luas Layang-layang:" + luas);
console.log("Keliling Layang-layang:" + keliling);