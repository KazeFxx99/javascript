const prompt = require("prompt-sync")();

let total = 0;

for (let i = 1; i <= 5; i++) {
  let uang = parseInt(prompt(`Masukkan kas anggota ke-${i}: Rp`));
  total += uang;
}

console.log(`\nTotal kas yang terkumpul: Rp${total}`);

if (total >= 100000) {
  console.log("Kas sudah mencukupi!");
} else {
  console.log("Kas masih kurang.");
}
