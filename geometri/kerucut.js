const prompt = require('prompt-sync')({ sigint: true });

let jariJari = Number(prompt("Masukan Jari-jari:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let sisi = Number(prompt("Masukan Sisi:"));

let volume = (1 / 3) * 3.14 * jariJari * jariJari * tinggi;
let luas = 3.14 * jariJari * (jariJari + sisi); sisi = Math.sqrt(jariJari * jariJari + tinggi * tinggi);

console.log("Volume Kerucut:" + volume);
console.log("Luas Permukaan Kerucut:" + luas);