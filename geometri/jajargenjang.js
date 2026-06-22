const prompt = require('prompt-sync')({ sigint: true });

let alas = Number(prompt("Masukan Alas:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let sisiMiring = Number(prompt("Masukan Sisi Miring:"));
let luas = alas * tinggi;
let keliling = 2 * (alas + sisiMiring);

console.log("Luas Jajargenjang:" + luas);
console.log("Keliling Jajargenjang:" + keliling);