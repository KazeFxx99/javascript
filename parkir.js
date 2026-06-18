const prompt = require("prompt-sync")();

while (true) {
  let jam = parseInt(prompt("Masukkan lama parkir (jam): "));
  let biaya = 0;

  if (jam <= 2) {
    biaya = 5000;
  } else {
    biaya = 5000 + (jam - 2) * 2000;
  }

  console.log(`Total biaya parkir: Rp${biaya}`);

  let ulang = prompt("Hitung lagi? (y/n): ");
  if (ulang.toLowerCase() !== "y") {
    break;
  }
}
