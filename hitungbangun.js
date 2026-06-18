const prompt = require("prompt-sync")();

while (true) {
  console.log("\n=== MENU HITUNG ===");
  console.log("1. Luas Persegi");
  console.log("2. Keliling Persegi Panjang");
  console.log("3. Volume Kubus");
  console.log("4. Keluar");

  let pilih = prompt("Pilih (1-4): ");

  if (pilih === "1") {
    let sisi = parseFloat(prompt("Masukkan sisi: "));
    console.log(`Luas Persegi = ${sisi * sisi}`);
  } else if (pilih === "2") {
    let p = parseFloat(prompt("Masukkan panjang: "));
    let l = parseFloat(prompt("Masukkan lebar: "));
    console.log(`Keliling = ${2 * (p + l)}`);
  } else if (pilih === "3") {
    let sisi = parseFloat(prompt("Masukkan sisi kubus: "));
    console.log(`Volume Kubus = ${sisi ** 3}`);
  } else if (pilih === "4") {
    console.log("Keluar dari program.");
    break;
  } else {
    console.log("Pilihan tidak valid!");
  }
}
