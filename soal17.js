const prompt=require("prompt-sync")({sigint:true})
let totalharga =parseFloat(prompt("masukan total harga barang: "));

if(totalharga >= 20000) {
    let diskon =totalharga * 0.075;
    let totalbayar = totalharga - diskon;
    console.log("diskon", diskon);
    console.log("total barang yang harus dibayar: " , totalbayar);
} else {
    console.log("tidak ada diskon. total barang yang harus dibayar: " ,totalharga);
}