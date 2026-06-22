const prompt = require('prompt-sync')({ sigint: true });

let alas = Number(prompt("Masukan Alas:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let sisi = Number(prompt("Masukan Sisi:"));

let luas = 0.5 * alas * tinggi
let keliling = alas + tinggi + sisi;

console.log("Luas Segitiga:" + luas);
console.log("Keliling Segitiga:" + keliling);