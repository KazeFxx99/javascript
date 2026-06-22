const prompt = require('prompt-sync')({ sigint: true });
let jariJari = Number(prompt("Masukan Jari-jari:"));
let luas = 3.14 * jariJari * jariJari;
let keliling = 2 * 3.14 * jariJari;

console.log("Luas Lingkaran:" + luas);
console.log("Keliling Lingkaran:" + keliling); 