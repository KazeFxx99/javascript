const prompt = require("prompt-sync")();

while (true) {
  let nama = prompt("Masukkan nama pegawai: ");
  let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja: "));
  let gaji = 0;

  if (jamKerja <= 40) {
    gaji = jamKerja * 50000;
  } else {
    gaji = (40 * 50000) + ((jamKerja - 40) * 75000); // lembur
  }

  console.log(`Gaji ${nama}: Rp${gaji}`);

  let lagi = prompt("Hitung gaji pegawai lain? (y/n): ");
  if (lagi.toLowerCase() !== "y") {
    break;
  }
}
