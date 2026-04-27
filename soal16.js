const prompt=require("prompt-sync")({sigint:true})
let juara=prompt("masukan juara (1/2/3):");

if(juara === "1") {
    console.log("selamat anda juara utama");
} else if (juara === "2") {
    console.log("selamat anda runner up");
} else if(juara === "3") {
    console.log("selamat anda juara ketigaa");
} else {
    console.log("inputan anda salah");
}