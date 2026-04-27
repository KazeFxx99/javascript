const prompt=require("prompt-sync")({sigint:true})
let hargamakanan=parseFloat(prompt("masukan harga makanan: "));

let pajak=hargamakanan * 0.10;
let fee=hargamakanan * 0.05;

let hargabayar=hargamakanan + pajak + fee;

console.log("hargamakanan : ", hargamakanan);
console.log("pajak :", pajak);
console.log("fee :", fee);
console.log("harga bayar :", hargabayar);
