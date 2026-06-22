const prompt = require('prompt-sync')({ sigint: true });
let alasatas = Number(prompt("Masukan Alas Atas:"));
let alasbawah = Number(prompt("Masukan Alas Bawah:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let sisiMiring = Number(prompt("Masukan Sisi Miring:"));
let luas = 0.5 * (alasatas + alasbawah) * tinggi;
let keliling = alasatas + alasbawah + 2 * sisiMiring;
console.log("Luas Trapesium:" + luas);
console.log("Keliling Trapesium:" + keliling);