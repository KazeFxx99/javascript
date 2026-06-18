// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

let ulang = 'y'
do {
    let nilai = Number(prompt('Masukkan nilai (0-100): '));
    let predikat;

    if (nilai >= 90 && nilai <= 100) {
        predikat = 'A';
    } else if (nilai >= 80 && nilai < 90) {
        predikat = 'B';
    } 
    else if (nilai >= 70 && nilai < 80) {
        predikat = 'C';
    }   else if (nilai >= 60 && nilai < 70) {
        predikat = 'D';
    }  else if (nilai >= 0 && nilai < 60) {
        predikat = 'E'; 
    } else {
        predikat = 'Nilai tidak valid';
    }   
    console.log(`Predikat: ${predikat}`);

    ulang = prompt('Ulang? (y/n): ');
} while (ulang === 'y' || ulang === 'Y');
