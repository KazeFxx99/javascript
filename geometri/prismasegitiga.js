const prompt = require('prompt-sync')();

let LuasAlas = Number(prompt("Masukan LuasAlas:"));
let KelilingAlas = Number(prompt("Masukan KelilingAlas:"));
let tinggi = Number(prompt("Masukan Tinggi:"));
let volume = LuasAlas * tinggi
let luas = 2 * LuasAlas + KelilingAlas * tinggi
console.log("Volume Prisma Segitiga:" + volume);
console.log("Luas Permukaan Prisma Segitiga:" + luas);