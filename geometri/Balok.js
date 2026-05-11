const prompt = require('prompt-sync')({ sigint: true });

let panjang = Number(prompt("Masukkan panjang: "));
let lebar = Number(prompt("Masukkan lebar: "));
let tinggi = Number(prompt("Masukkan tinggi: "));

let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
let volume = panjang * lebar * tinggi;

console.log("luas permukaan: " + luas);
console.log("volume: " + volume);