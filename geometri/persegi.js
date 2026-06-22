const prompt = require('prompt-sync')({ sigint: true });

let sisi = Number(prompt("Masukan sisi:"));

let luas = sisi * sisi
let keliling = 4 * sisi

console.log("Luas Persegi:" + luas);
console.log("keliling Persegi:" + keliling);