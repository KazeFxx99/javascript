const prompt = require('prompt-sync')({ sigint: true });
let luasAlas = Number(prompt("Masukan Luas Alas:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let luasselimut = Number(prompt("Masukan Luas Selimut:"));
let volume = (1 / 3) * luasAlas * tinggi;
let luaspermukaan = luasAlas + luasselimut;

console.log("Volume Limas:" + volume);
console.log("Luas Permukaan Limas:" + luaspermukaan);  