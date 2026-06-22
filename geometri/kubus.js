const prompt = require('prompt-sync')({ sigint: true });

let sisi = Number(prompt("Masukan sisi: "));


let volume = sisi * sisi * sisi
let luas = 6 * sisi * sisi;

console.log("Volume Kubus: " + volume)
console.log("Luas kubus:" + luas)