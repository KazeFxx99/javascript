const propmt = require("prompt-sync")({ sigint: true });

let angka = parseInt(propmt("Masukkan angka: "));

if (angka % 4 === 0) {
    console.log("kelipatan empat");
 
if (angka % 2 === 0) {
    console.log("bilangan genap");
} else {
    console.log("bukan bilangan genap");
} 

} else {
    console.log("bukan kelipatan empat");

    if (angka % 2 === 0) {
        console.log("bilangan genap");
    } else {
        console.log("bukan bilangan genap");
    }
}