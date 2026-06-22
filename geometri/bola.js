const prompt = require('prompt-sync')({ sigint: true });

let jariJari = Number(prompt("Masukan Jari-jari:"));
let volume = (4 / 3) * 3.14 * jariJari * jariJari * jariJari;
let luas = 4 * 3.14 * jariJari * jariJari;

console.log("Volume Bola:" + volume);
console.log("Luas Permukaan Bola:" + luas);