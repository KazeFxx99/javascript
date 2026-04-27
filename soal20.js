const prompt=require("prompt-sync")({sigint:true})
let huruf = prompt("Masukkan huruf (A-Z): ").toUpperCase();  // Konversi ke uppercase


if (huruf.length === 1 && /^[A-Z]$/.test(huruf)) {
    if ("AEIOU".includes(huruf)) { 
               console.log("Huruf ini adalah vokal");
    } else {
        console.log("Huruf ini adalah konsonan");
    }
} else {
    console.log("Input bukan huruf");
}
