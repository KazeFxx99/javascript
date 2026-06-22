const prompt = require('prompt-sync')({ sigint: true });
let x = parseFloat(prompt("Masukkan nilai x:"));
let y = parseFloat(prompt("Masukkan nilai y:"));
let z = parseFloat(prompt("Masukkan nilai z:"));

let k = x + y - z;
let j = (x * y) - (z + x);

console.log("Nilai k = " + k);
console.log("Nilai j = " + j);
