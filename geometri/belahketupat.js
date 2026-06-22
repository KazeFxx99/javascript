const prompt = require('prompt-sync')({ sigint: true });

let diagonal1 = Number(prompt("Masukan Diagonal 1:"));
let diagonal2 = Number(prompt("Masukan Diagonal 2:"));
let sisi = Number(prompt("Masukan Sisi:"));

let luas = 0.5 * diagonal1 * diagonal2
let keliling = 4 * sisi;

console.log("Luas Belah Ketupat:" + luas);
console.log("Keliling Belah Ketupat:" + keliling);  