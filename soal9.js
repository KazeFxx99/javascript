const prompt=require("prompt-sync")({sigint:true})
let sisi, luas, keliling
sisi = parseInt(prompt(`sisi:`))
luas = sisi * sisi
keliling = 4 * sisi

console.log(`luas :${luas} cm2 `)
console.log(`keliling :${keliling} cm2` );