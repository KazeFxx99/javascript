const prompt = require('prompt-sync')({ sigint: true });
let jariJari = Number(prompt("Masukan Jari-jari:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let volume = 3.14 * jariJari * jariJari * tinggi;
let luas = 2 * 3.14 * jariJari * (jariJari + tinggi);
console.log("Volume Tabung:" + volume);
console.log("Luas Permukaan Tabung:" + luas);