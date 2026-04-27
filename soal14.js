const prompt=require("prompt-sync")({sigint:true})
let angka=parseFloat(prompt("masukan angka :"));

if (angka >100){
    console.log("Nilai kamu sempurna")
}