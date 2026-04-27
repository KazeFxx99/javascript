const prompt=require("prompt-sync")({sigint:true})
let kode =prompt("masukan kode 5 digit: ");

if (kode === "78821"){
    console.log("You are authentificated");
} else{
    console.log("You have no acces");
}