const prompt=require("prompt-sync")({sigint:true})
let x=parseFloat(prompt("masukan angka x: "));
let y=parseFloat(prompt("masukan angka y: "));
let z=parseFloat(prompt("masukan angka z: "));

let terbesar=Math.max(x,y,z);
let terkecil=Math.min(x,y,z);

console.log("Nilai terbesar: ", terbesar);
console.log("Nilai terkecil: ", terkecil);