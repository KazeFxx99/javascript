const prompt = require("prompt-sync")();

while (true) {
  console.log("\n=== MENU MAKANAN ===");
  console.log("1. Nasi Goreng - Rp15.000");
  console.log("2. Mie Ayam - Rp12.000");
  console.log("3. Sate Ayam - Rp20.000");
  console.log("4. Keluar");

  let pilihan = prompt("Pilih menu (1-4): ");

  if (pilihan === "1") {
    console.log("Anda memilih Nasi Goreng - Rp15.000");
  } else if (pilihan === "2") {
    console.log("Anda memilih Mie Ayam - Rp12.000");
  } else if (pilihan === "3") {
    console.log("Anda memilih Sate Ayam - Rp20.000");
  } else if (pilihan === "4") {
    console.log("Terima kasih sudah memesan!");
    break;
  } else {
    console.log("Pilihan tidak valid, coba lagi.");
  }
}
