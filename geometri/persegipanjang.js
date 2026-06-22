const prompt = require("prompt-sync")({ sigint: true });

let panjang = Number(prompt("Masukan Panjang:"));
let lebar = Number(prompt("Masukan Lebar:"));

let luas = panjang * lebar
let keliling = 2 * (panjang + lebar);

console.log("Luas persegipanjang:" + luas);
console.log("kelilingpersegipanjang:" + keliling);
